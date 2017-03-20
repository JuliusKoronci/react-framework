import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Label from './index';
import Input from '../Input';

storiesOf('Label', module)
  .addWithInfo(
    'default',
    'This is the basic which will resolve into a text input.',
    () => (
      <Label>node | text | ...</Label>
    )
  )
  .addWithInfo(
    'Input Label',
    'This is the basic input wrapper.',
    () => (
      <Label labelText="Email"><Input value="jk@web-solutions.sk" type="text" /></Label>
    )
  )
  .addWithInfo(
    'Label Before Input',
    'This is the basic input wrapper with label placed before the input.',
    () => (
      <Label placeAfter={false} labelText="Email"><Input value="jk@web-solutions.sk" type="text" /></Label>
    )
  );

