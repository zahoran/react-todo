import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TodoList from "../TodoList/TodoList";

const layout = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <main>
        <TodoList />
      </main>
    </React.Fragment>
  )
};

export default layout;
