import './App.css';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component';

import HeaderComponenet from './components/header-component/header-component';

function App() {
  return (
    <div>
      <HeaderComponenet />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
