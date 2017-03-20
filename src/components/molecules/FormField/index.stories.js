import React from 'react';
import { storiesOf } from '@kadira/storybook';
import FormField from './index';
import Input from '../../atoms/Input';

storiesOf('FormField', module)
  .addWithInfo(
    'default',
    `
		Should ensure local state(without the need of a redux store) and update parent only if requested. 
		The Idea is that the field will have a local state and accept a return function and a should return boolean 
		parameter.This way when changing input fields in a form only the form field is re-rendered and not the entire 
		form. On submit we can just gather all the data. We can have the field validated on change or on submit.
		`,
    () => (
      <FormField returnValue={()=>{}} value="default value" WrappedNode={Input} type="text" />
    )
  );
