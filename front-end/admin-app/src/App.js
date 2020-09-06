import React from 'react';

import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';



function App() {
  return (

    <div className="App">
    <Router>
      <Switch>
        <PrivateRoute path='/' exact component={Home} />
        <Route path='/signin' component={Signin}></Route>
        <Route path='/signup' component={Signup}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
