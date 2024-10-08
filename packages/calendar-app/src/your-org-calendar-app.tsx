import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import CalendarApp from '../src/components/CalendarApp';
import '@your-org/shared-ui';
import '@your-org/state-management';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: CalendarApp,
  errorBoundary(err: Error) {
    return React.createElement('div', null, `Error: ${err.message}`);
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
