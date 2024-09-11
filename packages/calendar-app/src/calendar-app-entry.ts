import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { ErrorBoundary } from '@your-org/shared-ui';
import CalendarApp from './CalendarApp';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: CalendarApp,
  errorBoundary(err, info, props) {
    return <ErrorBoundary>{props.children}</ErrorBoundary>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
