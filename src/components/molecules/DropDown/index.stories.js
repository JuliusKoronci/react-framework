import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DropDown from './index';

storiesOf('DropDown', module)
  .addWithInfo(
    'default',
    'Default dropdown',
    () => (
      <DropDown iconName="caret-down" showOnHover={false} toggleName="toggle">
          <div className="dropdown">
              Dropwdown content
          </div>
      </DropDown>
    )
  )
  .addWithInfo(
    'customized',
    'Hide on leave disabled, show on mouse over enabled',
    () => (
      <DropDown iconName="caret-down" hideOnLeave={false} toggleName="toggle">
          <div className="dropdown">
              Dropwdown content
          </div>
      </DropDown>
    )
  )
  .addWithInfo(
    'nested dropdown',
    'Hide on leave disabled, show on mouse over enabled',
    () => (
      <DropDown iconName="caret-down" hideOnLeave={false} toggleName="toggle">
          <div className="dropdown">
              <DropDown iconName="caret-down" showOnHover={false} hideOnLeave={false} toggleName="nested toggle">
                  <div className="dropdown">
                      Dropwdown content
                  </div>
              </DropDown>
          </div>
      </DropDown>
    )
  );
