import React from 'react';
import { useForm } from '@formiz/react';
import { Box } from '@chakra-ui/core';

const propTypes = {};
const defaultProps = {};

export const Debug = () => {
  const form = useForm();

  return (
    <Box
      data-test="debug"
      as="pre"
      fontSize="xs"
      flex="1"
    >
      <Box fontSize="sm" color="gray.400">
        # Debug New Package
      </Box>
      {JSON.stringify(form, null, 2)}
    </Box>
  );
};

Debug.propTypes = propTypes;
Debug.defaultProps = defaultProps;
