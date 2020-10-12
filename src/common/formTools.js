import React from 'react';
import { Form } from 'semantic-ui-react';

export const renderInputField = ({
  input,
  icon,
  type,
  placeholder,
  meta: { touched, error },
}) => (
  <>
    <Form.Input
      {...input}
      icon={icon}
      placeholder={placeholder}
      type={type}
      iconPosition="left"
      fluid
    />
    {touched && error && <span>{error}</span>}
  </>
);
