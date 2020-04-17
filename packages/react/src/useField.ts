import {
  useState, useContext, useEffect, useRef, useLayoutEffect,
} from 'react';
import {
  FieldValue, FieldValidationObject, FieldProps, UseFieldValues, FieldState,
} from 'types/field.types';
import { FormFields, FormContextValue } from 'types/form.types';
import { FormContext, defaultFormState } from './Formiz';
import { getUniqueId, useRefValue } from './utils';

const getFieldErrors = async (
  value: FieldValue,
  validations: FieldValidationObject[],
): Promise<(string | undefined)[]> => {
  const rules = await Promise.all((validations || [])
    .map(async (validation) => validation.rule(value)));
  return rules
    .reduce<(string | undefined)[]>(
      (errors, isValid, index) => (!isValid ? [...errors, validations[index].message] : errors),
    []);
};

export const useField = ({
  debounce = 0, // TODO rename to debounceValidations
  defaultValue = null,
  formatValue = (value: FieldValue): FieldValue => value,
  name,
  onChange = () => {},
  // required, // TODO
  validations = [],
}: FieldProps): UseFieldValues => {
  const isMountedRef = useRef(true);
  const {
    updateField,
    formStateSubject,
    updateFieldsSubject,
  } = useContext<FormContextValue>(FormContext);
  const [formState, setFormState] = useState(defaultFormState);
  const [state, setState] = useState<FieldState>({
    id: getUniqueId('field'),
    name,
    value: defaultValue,
    errors: [],
    isPristine: true,
  });
  const stateRef = useRefValue(state);
  const validationsRef = useRefValue(validations);
  const onChangeRef = useRefValue(onChange);
  const formatValueRef = useRefValue(formatValue);

  useLayoutEffect(() => {
    formStateSubject.subscribe(setFormState);
    return () => formStateSubject.unsubscribe();
  }, []);

  useLayoutEffect(() => {
    updateFieldsSubject.subscribe((fields: FormFields) => {
      const field = fields.find((x) => x.id === stateRef.current.id);
      if (field && JSON.stringify(field) !== JSON.stringify(stateRef.current)) {
        setState(field);
      }
    });
    return () => updateFieldsSubject.unsubscribe();
  }, []);

  const setValue = (value: FieldValue) => {
    setState((prevState: FieldState) => ({
      ...prevState,
      value,
      isPristine: false,
    }));
    onChangeRef.current(formatValueRef.current(value), value);
  };

  // Update validation
  useEffect(() => {
    const validateField = async () => {
      const errors = await getFieldErrors(state.value, validationsRef.current);
      if (isMountedRef.current) {
        setState((prevState: FieldState) => ((
          JSON.stringify(prevState.errors) === JSON.stringify(errors)
        ) ? prevState
          : {
            ...prevState,
            errors,
          }));
      }
    };

    if (!debounce) {
      validateField();
      return () => {};
    }

    const timer = setTimeout(() => {
      validateField();
    }, debounce);
    return () => clearTimeout(timer);
  }, [
    state.value,
    JSON.stringify(validations.reduce<any>(
      (acc, cur) => [
        ...acc,
        ...(cur.deps || []),
        cur.message,
      ],
      [],
    )),
  ]);

  useEffect(() => {
    if (updateField) {
      updateField({
        ...state,
        value: formatValueRef.current(state.value),
      });
    }
  }, [state, name]);

  useEffect(() => () => {
    isMountedRef.current = false;
  }, []);

  return {
    errorMessage: state.errors[0],
    errorMessages: state.errors,
    id: state.id,
    isPristine: state.isPristine,
    isSubmitted: formState.isSubmitted,
    isValid: !state.errors.length,
    setValue,
    value: state.value,
  };
};
