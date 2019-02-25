import React from 'react';
import {NavLink} from "react-router-dom";
import './NavigationItems.css';

const navigationItems = () => (
  <ul className="nav navbar-nav NavItems">
    <li>
      <NavLink to="/todo"
               activeClassName='active'>TodoList</NavLink >
    </li>
    <li>
      <NavLink to="/github"
               activeClassName='active'>GithubRepo</NavLink >
    </li>
  </ul>
);

export default navigationItems;
