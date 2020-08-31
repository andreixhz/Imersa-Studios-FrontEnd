import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Menu from './components/Menu/Index';

function Routes() {
    return (
        <BrowserRouter className>
            <Menu/>
            <div className="center">
                <div className="container">
                    <Route path="/" exact component={Home} />
                    <Route path="/servicos" exact component={Services} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Routes;