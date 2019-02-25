import React from 'react';
import {NavLink} from 'react-router-dom';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink to='/'>
            <span className="navbar-brand">TodoListApp</span>
          </NavLink>
        </div>
        <NavigationItems/>
      </div>
    </nav>
  )
};

export default toolbar;
