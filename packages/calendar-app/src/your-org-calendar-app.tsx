import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';
// Create a wrapper component that uses the new React 18 API
const ReactWrapper = ({ children }) => {
  const rootRef = React.useRef(null);
  
  React.useEffect(() => {
    const root = ReactDOM.createRoot(rootRef.current);
    root.render(children);
    return () => root.unmount();
  }, [children]);
  
  return <div ref={rootRef} />;
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err: Error) {
    return React.createElement('div', null, `Error: ${err.message}`);
  },
  renderType: 'createRoot',
});

export const { bootstrap, mount, unmount } = lifecycles;