import React from 'react';
import './App.scss';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store/reducers';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(logger));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </Router>
        </div>
    </Provider>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function NoMatch() {
  return <h2>404</h2>;
}

export default App;
