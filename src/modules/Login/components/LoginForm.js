// @flow
import React, { PropTypes, Component } from 'react';
import { Input, FormField } from '../../../components';

const LoginForm = ({ onSubmit, returnValue, shouldReturnValue, formValues }) => {
  return (
    <form onSubmit={onSubmit}>
    <FormField
      WrappedNode={Input}
      placeholder="Username"
      shouldReturnValue={shouldReturnValue}
      value={formValues.username}
      returnValue={returnValue.bind(null, 'username')}
    />
    <FormField
      WrappedNode={Input}
      placeholder="Password" type="password"
      shouldReturnValue={shouldReturnValue}
      value={formValues.password}
      returnValue={returnValue.bind(null, 'password')}
    />
    <button onClick={onSubmit} type="submit">Submit</button>
  </form>
  );
};

LoginForm.defaultProps = {
  shouldReturnValue: true,
};
LoginForm.propTypes    = {
  onSubmit         : PropTypes.func.isRequired,
  returnValue      : PropTypes.func.isRequired,
  shouldReturnValue: PropTypes.bool.isRequired,
  formValues       : PropTypes.object.isRequired,
};

export default LoginForm;
