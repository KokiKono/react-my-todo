import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Router = () => (
  <Switch>
    <Route exact path='/todo_list' />
    <Route path='todo_list/:number' />
  </Switch>
);
export default Router;
