import React from 'react';
import { BarChart } from './components/barChart';
import { StackedChart } from './components/barChart';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/BarChart" component={BarChart} />
        <Route exact path="/">
          <Redirect to="/BarChart" />
        </Route>
        <Route exact path="/StackedChart" component={StackedChart} />
      </Switch>
    </div>
  );
};