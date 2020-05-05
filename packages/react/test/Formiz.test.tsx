import * as React from 'react';
import {
  render,
} from '@testing-library/react';
import { Formiz } from '../src';
import { Field } from './utils';

beforeEach(() => {
  jest.resetModules();
});

describe('<Formiz />', () => {
  it('Should mount without crashing', () => {
    render((
      <Formiz autoForm>
        My Form
      </Formiz>
    ));
  });

  it('Should mount fields without crashing', () => {
    render((
      <Formiz autoForm>
        <Field name="field1" />
        <Field name="field2" />
      </Formiz>
    ));
  });

  it('Should mount 2 separated `<Formiz>` without crashing', () => {
    render((
      <div>
        <Formiz autoForm>
          <Field name="field1" />
          <Field name="field2" />
        </Formiz>
        <Formiz>
          <Field name="field1" />
          <Field name="field2" />
        </Formiz>
      </div>
    ));
  });
});
