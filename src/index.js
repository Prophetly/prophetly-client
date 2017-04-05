import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './components/AppComponent.react.js';

import './assets/app.css';
import './assets/table.css';

import '../node_modules/rc-tabs/assets/index.css';
import '../node_modules/primer-css/build/build.css';

ReactDOM.render(
  <AppComponent />,
  document.getElementById('root')
);
