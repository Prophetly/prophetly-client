'use strict';

// we change its value based on the development environment
let prophetlyServerAddress;

if (process.env.NODE_ENV === 'production') {
  prophetlyServerAddress = window.__PROPHETLY_SERVER_ADDRESS__;
} else {
  prophetlyServerAddress = 'http://localhost:8888';
}

const AppConstants = {
  PROPHETLY_SERVER_ADDRESS: prophetlyServerAddress
};

export default AppConstants;
