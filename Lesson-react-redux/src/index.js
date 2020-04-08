import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

import counterReducer from './store/reducer/counter';
import resultReducer from './store/reducer/result';

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer
});

const logger = store => {
  return next => {
    return action => {
      const result = next(action);
      return result
    }
  }
}

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
