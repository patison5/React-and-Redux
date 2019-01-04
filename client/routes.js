import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={Home} />
    </Route>
)
