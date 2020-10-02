import * as React from "react";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import motorcycleReducer from '../reducers/MotorcycleReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const motorcycleStore = createStore(motorcycleReducer, applyMiddleware(sagaMiddleware));

export default motorcycleStore;

sagaMiddleware.run(rootSaga);
