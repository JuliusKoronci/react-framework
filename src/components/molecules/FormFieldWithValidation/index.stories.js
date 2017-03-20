import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormFieldWithValidation from './index';
import { FormField, Input, Label } from '../../';

storiesOf('FormFieldWithValidation', module)
  .addWithInfo(
    'default',
    `
		Should ensure local state(without the need of a redux store) and update parent only if requested. 
		The Idea is that the field will have a local state and accept a return function and a should return boolean 
		parameter.This way when changing input fields in a form only the form field is re-rendered and not the entire 
		form. On submit we can just gather all the data. We can have the field validated on change or on submit.
		`,
    () => (
      <FormFieldWithValidation
        className="form-group"
        errorClass="error" hasError={true}
        errorMessage="This field is not valid"
      >
          <Label labelText="My awesome input" placeAfter={false}>
              <FormField returnValue={()=>{}} value="default value" WrappedNode={Input} type="text" />
          </Label>
      </FormFieldWithValidation>
    )
  );
