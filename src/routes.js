import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/servicos" exact component={Services} />
        </BrowserRouter>
    )
}

export default Routes;