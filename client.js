import '@babel/register';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './core/Router';

function run() {
  const state = window.AppState;
  const container = document.getElementById('app');
  const location = { path: window.location.pathname };

  const [component, page] = Router.match(location, state);

  ReactDOM.hydrate(component, container, () => {
    document.title = page.title;
    document.querySelector('meta[name=description]').setAttribute('content', page.description);
  });
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
