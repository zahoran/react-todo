import React, {Component} from 'react';
import Layout from './containers/Layout/Layout';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import TodoList from "./containers/TodoList/TodoList";
import Github from "./containers/Github/Github";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path={'/todo'} component={TodoList}/>
            <Route path={'/github'} component={Github}/>
            <Redirect from="/" to="/todo"/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
