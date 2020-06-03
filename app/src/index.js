import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Navbar/>
              <Route path="/" component={Login}/>
              <Route path="/Signup" component={Signup}/>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
