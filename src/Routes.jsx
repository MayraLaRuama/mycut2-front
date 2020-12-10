import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Login from './pages/Login';
import Registre from './pages/Registre';
import Profile from './pages/Profile';
import Products from './pages/Products'
import Favorites from './pages/Favorites';
import Address from './pages/Address';

import LandingPage from './pages/LandingPage';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={LandingPage}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/registre" exact component={Registre}></Route>
            <Route path="/landing" exact component={LandingPage}></Route>
            <Route path="/profile" exact component={Profile}></Route>
            <Route path="/products" exact component={Products}></Route>
            <Route path="/favorites" exact component={Favorites}></Route>
            <Route path="/address" exact component={Address}></Route>
        </BrowserRouter>
    )
}

export default Routes;