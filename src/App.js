import React, { Component } from "react";
import { BarChart } from './components/barChart';
import { StackedChart} from './components/barChart';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar } from './components/barChart/NavBar';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/BarChart" component={BarChart} />
        <Route exact path="/">
          <Redirect to="/BarChart" />
        </Route>
        <Route exact path="/StackedChart" component={StackedChart} />
      </Switch>
    </div>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="mixed-chart">
           Hello , Hello !
          
          <Router>
          <NavBar />
          <Routes />
          </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;