import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

import { renderInputField } from '../../common/formTools';

const LoginForm = ({ handleSubmit }) => (
  <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="large" onSubmit={handleSubmit}>
        <Segment stacked>
          <Field
            name="username"
            type="text"
            icon="user"
            placeholder="E-mail address"
            component={renderInputField}
          />
          <Field
            name="password"
            type="password"
            icon="lock"
            placeholder="Password"
            component={renderInputField}
          />
          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default reduxForm({
  form: 'login-form',
})(LoginForm);
