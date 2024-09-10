import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { ThemedApp as App } from './App';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err: Error) {
    return React.createElement('div', null, `Error: ${err.message}`);
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
