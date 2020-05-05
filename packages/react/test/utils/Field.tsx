import * as React from 'react';
import { useField } from '../../src';

export const Field = (props: any) => {
  const { value, setValue } = useField(props);

  return (<input value={value || ''} onChange={(e) => setValue(e.target.value)} />);
};
