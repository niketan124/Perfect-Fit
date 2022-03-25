import React, { Component} from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import SignInSignOut from './pages/sigh-in-sign-out/sigh-in-sign-out.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HeaderComponenet from './components/header-component/header-component';
import CheckOut from './pages/checkout/checkout.component';



class App extends Component {
  constructor() {
    super();
    this.state = {
      CurrentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            CurrentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({CurrentUser: userAuth});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <HeaderComponenet CurrentUser = {this.state.CurrentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignOut} />
          <Route exact path='/checkout' component={CheckOut} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
