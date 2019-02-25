import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <span className="navbar-brand">TodoListApp</span>
        </div>
        <NavigationItems />
      </div>
    </nav>
  )
};

export default toolbar;
