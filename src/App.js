import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import RegisterForm from './components/Register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AlertComponent from './components/AlertComponent/AlertComponent';
import Login from './components/Login/Login';

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <div className="App">
      <div className=" d-flex align-items-center flex-column">
        <Router>
          <Switch>
            <Route path='/register' exact={true}>
              <RegisterForm title={title} updateTitle={updateTitle} />
            </Route>
            <Route path='/login' exact={true}>
              <Login updateTitle={updateTitle} />
            </Route>
            <Route path='/' exact={true}>
              <Home />
            </Route>
          </Switch>
        </Router>
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} />
      </div>
    </div>
  );
}

export default App;
