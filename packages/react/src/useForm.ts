import {
  useContext, useCallback, useState, useLayoutEffect, useEffect, useRef,
} from 'react';
import { debounceTime } from 'rxjs/operators';
import {
  FormContext,
  defaultFormState,
} from './Formiz';
import {
  FormFields,
  UseFormValues,
} from './types/form.types';

export const useForm = ({
  enableFormState = true,
  enableFormValues = true,
  debounceValues = 200,
} = {}): UseFormValues => {
  const { formActions, formStateSubject, fieldsStateSubject } = useContext(FormContext);
  const [actions, setActions] = useState(formActions);
  const [formState, setFormState] = useState(defaultFormState);
  const [fieldsState, setFieldsState] = useState<FormFields>([]);
  const connectFormStateSubject = useRef();
  const connectFieldsStateSubject = useRef();

  // Use the connect property to retrieve the state
  const connect = useCallback(({
    formActions: _formActions,
    formStateSubject: _formStateSubject,
    fieldsStateSubject: _fieldsStateSubject,
  }) => {
    setActions(_formActions);
    if (enableFormState) {
      _formStateSubject.subscribe(setFormState);
      connectFormStateSubject.current = _formStateSubject;
    }

    if (enableFormValues) {
      _fieldsStateSubject
        .pipe(
          debounceTime(debounceValues),
        )
        .subscribe(setFieldsState);
      connectFieldsStateSubject.current = _fieldsStateSubject;
    }
  }, []);

  // Clean connect
  useEffect(() => () => {
    if (connectFormStateSubject.current) {
      (connectFormStateSubject.current as any).unsubscribe();
    }

    if (connectFieldsStateSubject.current) {
      (connectFieldsStateSubject.current as any).unsubscribe();
    }
  }, []);

  useLayoutEffect(() => {
    if (!formStateSubject || !enableFormState) {
      return () => {};
    }

    formStateSubject.subscribe(setFormState);
    return () => formStateSubject.unsubscribe();
  }, [formStateSubject]);

  useLayoutEffect(() => {
    if (!fieldsStateSubject || !enableFormValues) {
      return () => {};
    }

    fieldsStateSubject
      .pipe(
        debounceTime(debounceValues),
      )
      .subscribe(setFieldsState);
    return () => fieldsStateSubject.unsubscribe();
  }, [fieldsStateSubject]);

  return {
    ...(enableFormState ? formState : {}),
    ...actions,
    values: fieldsState,
    __connect__: connect,
  };
};
