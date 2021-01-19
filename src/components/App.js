import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from './PrivateRoute'
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from 'react-bootstrap';

const App = () => {

  return (
    <>
      <Navbar className="w-100 bg-dark">
        <h4 className="text-light">Event App</h4>
      </Navbar>
      <Container className="d-flex align-items-center justify-content-center" style={{ flex: "1 1 0" }} >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;