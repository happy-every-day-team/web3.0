import React from 'react';

import Home from './pages/home'
import Article from './pages/article'
import Header from './components/header'

import { Switch, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/article" component={Article} />
      </Switch>
    </HashRouter>
  );
}

export default App;
