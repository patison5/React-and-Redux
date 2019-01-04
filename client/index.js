import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import routes from './routes';

render (
    <BrowserRouter>
        <Switch>
            {routes}
        </Switch>
    </BrowserRouter>, document.getElementById('app')
)
