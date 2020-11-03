import React from 'react';
import Signup from '../Components/Signup';
import Dashboard from '../Components/Dashboard';
import Login from '../Components/Login';
import PrivateRoute from '../Components/PrivateRoute';
import ForgotPassword from '../Components/ForgotPassword';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../Contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div> 
      </Container>
  );
}

export default App;
