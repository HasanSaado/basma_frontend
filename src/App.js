// Libraries                                                                                                                                                                                                                     
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Pages
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { RegisterPage } from './pages/RegisterPage';

// Style
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

function App() {

  return (

    <div className="App">
      <Router>
        <Switch>

          <Route
            path="/"
            exact
            component={LoginPage}
          />

          <Route
            path="/register"
            exact
            component={RegisterPage}
          />

          <PrivateRoute
            path="/dashboard"
            component={DashboardPage}
            redirectPath="/"
          />

        </Switch>
      </Router>
    </div>
  );
}

export default App;