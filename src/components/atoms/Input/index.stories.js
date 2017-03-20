import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Input from './index';

storiesOf('Input', module)
  .addWithInfo(
    'default',
    `
            This is the basic which will resolve into a text input.
        `,
    () => (
      <Input />
    )
  )
  .addWithInfo(
    'with value and onChange',
    `
            Input accepts its value from the parent component. All regular React attributes like onClick, className... 
            are working in a standard way
        `,
    () => {
      const onChange = () => {};
      return (<Input value="my default state value" onChange={onChange} />);
    }
  );
