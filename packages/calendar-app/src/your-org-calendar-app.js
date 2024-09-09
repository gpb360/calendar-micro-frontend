import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './App';
var lifecycles = singleSpaReact({
    React: React,
    ReactDOM: ReactDOM,
    rootComponent: App,
    errorBoundary: function (err) {
        return React.createElement('div', null, "Error: ".concat(err.message));
    },
});
export var bootstrap = lifecycles.bootstrap, mount = lifecycles.mount, unmount = lifecycles.unmount;
