import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AlertComponent from './components/AlertComponent/AlertComponent';

function App() {
  const [updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <div className="App">
      <div className=" d-flex align-items-center flex-column">
        <Router>
          <Switch>
            <Route path='/register' exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} />
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
