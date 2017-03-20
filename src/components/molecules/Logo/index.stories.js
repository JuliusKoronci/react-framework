import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Logo from './index';

storiesOf('Logo', module)
  .addWithInfo(
    'default',
    `
		Default logo, wraps an image with span and a textual representation. 
		Text is hidden by default. Can be shown left or right from the image.
		`,
    () => (
      <Logo
        image="https://www.google.cz/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png"
        text="My Awesome Logo"
      />
    )
  )
  .addWithInfo(
    'with text to left',
    `
        Default logo, wraps an image with div and a textual representation. 
        Text is hidden by default. Can be shown left or right from the image.
		    `,
    () => (
      <Logo
        image="https://www.google.cz/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png"
        text="My Awesome Logo" textToLeft showText
      />
    )
  )
  .addWithInfo(
    'with text to right',
    `
        Default logo, wraps an image with div and a textual representation. 
        Text is hidden by default. Can be shown left or right from the image.
		    `,
    () => (
      <Logo
        image="https://www.google.cz/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png"
        text="My Awesome Logo" showText
      />
    )
  );
