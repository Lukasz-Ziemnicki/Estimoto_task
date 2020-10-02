import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import motorcycleStore from '../store/MotorcycleStore';
import AppContainer from '../containers/AppContainer';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const MotorcycleApp = () => (
  <Provider store={motorcycleStore}>
      <AppContainer />
  </Provider>
);

export default MotorcycleApp;
