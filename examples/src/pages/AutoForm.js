/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Formiz, useField, useForm,
} from '@formiz/react';
import { isEmail } from '@formiz/validations';
import {
  Button, Box, Input, Flex, Stack,
} from '@chakra-ui/core';
import { PageHeader } from '../components/PageHeader';
import { useToastValues } from '../hooks/useToastValues';
import { PageLayout } from '../layout/PageLayout';

const FIELDS_COUNT = 1;

const DebugRender = () => {
  console.log('DebugRender subcomponent');
  return '';
};

const DebugUseFrom = () => {
  const form = useForm();
  console.log('DebugRender useForm');
  return (
    <Box p="4">
      useForm<br />
      {JSON.stringify(form, null, 2)}
    </Box>
  );
};

const FieldInput = (props) => {
  const {
    value, setValue, isValid, isSubmitted, errorMessage,
  } = useField(props);
  const { label, onChange, ...rest } = props;
  return (
    <Box {...rest}>
      <label>
        {label}
      </label>
      <Input
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
      />
      {!isValid && errorMessage}
      {isSubmitted && '[Form submitted]'}
    </Box>
  );
};

export const AutoForm = () => {
  const form = useForm({ enableFormState: false, enableFormValues: false });
  const toastValues = useToastValues();

  const handleSubmit = (values) => {
    toastValues(values);
  };

  return (
    <Formiz
      // autoForm
      onSubmit={handleSubmit}
      connect={form}
    >
      <PageLayout
        newPackage
        as="form"
        onSubmit={form.submit}
      >
        <PageHeader githubPath="AutoForm.js">
          Auto form
        </PageHeader>

        <Button onClick={() => form.setFieldsValues({ firstname: 'plop', lastname: 'plip' })}>
          Set values
        </Button>

        <DebugUseFrom />

        <DebugRender />

        <Box p="4">
          useForm with connect<br />
          {JSON.stringify(form, null, 2)}
        </Box>

        <Stack>
          <FieldInput
            name="firstname"
            label="FirstName"
            validations={[
              {
                rule: async (x) => new Promise((resolve) => {
                  setTimeout(() => {
                    resolve(!!x);
                  }, 2000);
                }),
                message: 'Required',
              },
            ]}
          />
          <FieldInput
            name="lastname"
            label="LastName"
            formatValue={(v) => `___${v}___`}
            onChange={(v, rawValue) => rawValue === 'john' && console.log({ v })}
            validations={[
              {
                rule: (v) => v !== 'john',
                message: 'Not john',
              },
            ]}
          />
          {[...Array(FIELDS_COUNT)].map((_x, index) => (
            <FieldInput
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              name={`user[${index}].email`}
              label={`Email ${index}`}
              validations={[
                {
                  rule: async (x) => !!x,
                  message: 'Required',
                },
                {
                  rule: isEmail(),
                  message: 'Not an email',
                },
              ]}
            />
          ))}
        </Stack>

        <Flex>
          <Button
            type="submit"
            ml="auto"
            variantColor="brand"
          >
            Submit
          </Button>
        </Flex>
      </PageLayout>
    </Formiz>
  );
};
