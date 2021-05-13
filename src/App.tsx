import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Login } from '../src/components/login/index'
import { Home } from '../src/components/home/index'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
