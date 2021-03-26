import React, { useEffect } from 'react'
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders';
//you dont have to hide this it is safe
const promise = loadStripe('pk_test_51IN6V9FAWLMuM7De5q8BEulPzXFw7B3KjrhhbDdGuFVqiAMDsgpIDLdP3CEXhDdqO8Dcooi5hOUBdn4JjJ95hcgg00GiVtflZ4');


function App() {
  //this function will run only once since there are no elements in the array parameter everytime some action happens which in this case is the 
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log
      (`the user is ${authUser}`);
     
          if(authUser)
          {
            //the user is loggen in
            dispatch({
              type:'SET_USER',
              user: authUser
            })
          }
          else
          {
            //the user has logged out
            dispatch({
              type:'SET_USER',
              user: null,
            })
          }
    
      })
  }, [])


  return (
    // BEM 
    <Router>
      <div className="app">
        
        <Switch>
          <Route path ="/orders">
            <Header/>
            <Orders />
          </Route>

          <Route path ="/login">
            <Login/>
          </Route>

          <Route path ="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          
          <Route path ="/payment">
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          
          <Route path ="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
