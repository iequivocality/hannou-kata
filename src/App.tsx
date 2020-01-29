import React from 'react';
import './App.scss';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store/reducers';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        
      </div>
    </Provider>
  );
}

export default App;
