import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Icon from './index';

storiesOf('Icon', module)
  .add('default', () => (
    <Icon className="pencil">Hello</Icon>
  ));
