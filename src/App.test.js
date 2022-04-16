import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Note: the "canvas" module is included in the dev-dependencies so that Jest's
// virtual dom can call various canvas functions.

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

