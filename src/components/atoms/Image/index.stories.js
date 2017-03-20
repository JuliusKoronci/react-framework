import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Image from './index';

storiesOf('Image', module)
  .addWithInfo(
    'default',
    'Simple image element, alt is forced to be required',
    () => (
      <Image imageSource="https://www.google.cz/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png"
             altText="Google random image" />
    )
  );
