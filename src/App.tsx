import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.scss';
import { PageEdit, PageList } from "./pages";

function App() {
  return (
    <div className="app-ws">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/list" />}
          />
          <Route exact path="/list" component={PageList} />
          <Route exact path="/edit" component={PageEdit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
