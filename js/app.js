import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './components/AppComponent.react.js';

// rc-tabs related modules
import '../node_modules/rc-tabs/assets/index.css';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <AppComponent />,
    document.getElementById('app-section')
  );
});
