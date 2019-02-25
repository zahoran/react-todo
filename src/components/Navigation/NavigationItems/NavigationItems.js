import React from 'react';
import {Link} from "react-router-dom";

const navigationItems = () => (
  <ul className="nav navbar-nav">
    <li><Link to="/todo">TodoList</Link></li>
    <li><Link to="/github">GithubRepo</Link></li>
  </ul>
);

export default navigationItems;
