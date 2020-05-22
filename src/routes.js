import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Importando páginas
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Ability from './pages/Ability'
import NotFound from './pages/NotFound'

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />                
                <Route path="/pokemon" component={Pokemon} />
                <Route path="/pokemon/:id" component={Pokemon} />
                <Route path="/ability" component={Ability} />
                <Route path="/ability/:id" component={Ability} />
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes