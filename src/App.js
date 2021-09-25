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