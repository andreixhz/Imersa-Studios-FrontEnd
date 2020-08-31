import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Menu from './components/Menu/Index';

function Routes() {
    return (
        <BrowserRouter>
            <Menu/>
            <Route path="/" exact component={Home} />
            <Route path="/servicos" exact component={Services} />
        </BrowserRouter>
    )
}

export default Routes;