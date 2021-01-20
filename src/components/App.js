import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Header'
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

const App = () => {

  return (
    <>
      <AuthProvider>
        <Header />
        <Container className="d-flex align-items-center justify-content-center py-2" style={{ flex: "1 1 0" }} >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Router>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch>
            </Router>
          </div>
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;