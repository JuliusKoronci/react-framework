import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Link from './index';

storiesOf('Link', module)
  .addWithInfo(
    'default',
    'Default link element, renders and icon if name provided and creates a link or void based on path',
    () => (<Link target="_blank" iconName="pencil" path="http://www.google.com">Link to google</Link>)
  );
