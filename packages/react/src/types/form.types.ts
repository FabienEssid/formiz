import { FieldState, FieldValue } from './field.types';

export interface FormState {
  isSubmitted: boolean;
  isValid: boolean;
}

export interface FormContextValue {
  updateField?(fieldState: FieldState): void;
  formActions?: FormActions;
  formStateSubject?: any;
  fieldsStateSubject?: any;
  updateFieldsSubject?: any;
}

export type FormFields = Array<FieldState>;

export type FormValues = any;

export interface FormActions {
  submit?(values: FormValues): void;
  setFieldsValues?(objectOfValues: {
    [key: string]: FieldValue;
  }): void;
  __connect__?(s: any): void;
}

export interface FormizProps {
  autoForm?: boolean;
  children?: React.ReactNode;
  connect?: any;
  onSubmit?(values: object): void;
}

export interface UseFormValues extends FormActions {
  values?: FormValues;
}
