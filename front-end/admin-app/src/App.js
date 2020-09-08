import React, { useEffect } from 'react';

import{ Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn } from './actions'
import {useDispatch,useSelector } from 'react-redux'
import Products  from './containers/Products'
import Orders from './containers/Orders'


function App() {
  const auth = useSelector(state => state.auth);
 const dispatch = useDispatch();
  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn)
    }
    
  }, [])

  return (

    <div className="App">
 
      <Switch>
        <PrivateRoute path='/' exact component={ Home } />
        <PrivateRoute path='/products' component={ Products } />
        <PrivateRoute path='/orders' component={ Orders } />
        <Route path='/signin' component={Signin}></Route>
        <Route path='/signup' component={Signup}></Route>
      </Switch>
  
    </div>
  );
}

export default App;
