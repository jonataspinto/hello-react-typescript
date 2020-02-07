import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/home';

const Routes: React.FC<any> = ()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
