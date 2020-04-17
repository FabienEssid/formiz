import * as React from 'react';
import {
  useCallback, useLayoutEffect, useRef, useMemo,
} from 'react';
import { Subject } from 'rxjs';
import { FieldState, FieldValue } from './types/field.types';
import { useRefValue } from './utils';
import {
  FormActions, FormState, FormContextValue, FormizProps, FormFields,
} from './types/form.types';

export const defaultFormActions: FormActions = {
  submit: () => {},
  setFieldsValues: () => {},
};

export const defaultFormState: FormState = {
  isSubmitted: false,
  isValid: true,
};

export const FormContext = React.createContext<FormContextValue>({});

// const checkFormValidity = (fields: any): any => Object.values(fields)
//   .every((field: any) => !field.errors.length);

export const Formiz = ({
  autoForm = false,
  children = '',
  connect = {},
  onSubmit = () => {},
}: FormizProps) => {
  const formStateSubject = useMemo(() => new Subject(), []);
  const fieldsStateSubject = useMemo(() => new Subject(), []);
  const updateFieldsSubject = useMemo(() => new Subject(), []);
  const formStateRef = useRef(defaultFormState);
  const fieldsRef = useRef<FormFields>([]);

  const connectRef = useRefValue(connect.__connect__ || (() => {}));
  const onSubmitRef = useRefValue(onSubmit);

  const updateFormState = useCallback((key: string, value: FieldValue): void => {
    if (JSON.stringify((formStateRef.current as any)[key]) === JSON.stringify(value)) {
      return;
    }

    const newState = { ...formStateRef.current, [key]: value };
    formStateRef.current = newState;
    formStateSubject.next({ ...formStateRef.current });
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    if (e) {
      e.preventDefault();
    }

    onSubmitRef.current([...fieldsRef.current]);

    updateFormState('isSubmitted', true);
  }, [updateFormState]);

  const handleSetFieldsValues = useCallback((objectOfValues = {}) => {
    const newFields = fieldsRef.current.map((field: FieldState) => ({
      ...field,
      value: objectOfValues[field.name],
    }));
    fieldsRef.current = [...newFields];
    updateFieldsSubject.next([...newFields]);
  }, []);

  const updateField = (newField: FieldState): void => {
    if (!newField) {
      return;
    }

    const field = fieldsRef.current.find((x) => x.id === newField.id);
    const otherFields = fieldsRef.current.filter((x) => x.id !== newField.id);

    if (JSON.stringify(newField) === JSON.stringify(field)) {
      return;
    }

    fieldsRef.current = [
      ...otherFields,
      { ...newField },
    ];
    fieldsStateSubject.next([...fieldsRef.current]);
  };

  const formActions: FormActions = {
    submit: handleSubmit,
    setFieldsValues: handleSetFieldsValues,
  };

  useLayoutEffect(() => {
    connectRef.current({
      formActions,
      formStateSubject,
      fieldsStateSubject,
    });
  }, [
    formStateSubject,
    fieldsStateSubject,
  ]);

  return (
    <FormContext.Provider value={{
      updateField,
      formActions,
      formStateSubject,
      fieldsStateSubject,
      updateFieldsSubject,
    }}
    >
      {!autoForm
        ? children
        : (
          <form noValidate onSubmit={handleSubmit}>
            {children}
          </form>
        )}
    </FormContext.Provider>
  );
};
