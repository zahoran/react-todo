import React from 'react';
import TodoItem from './TodoItem/TodoItem';

const todoItems = (props) => {
  return (
    <ul className="list-group">
      {props.items.map((item) => {
        return <TodoItem key={item.id}
                         delete={props.delete}
                         toggleComplete={props.toggleComplete}
                         item={item}/>
      })}
    </ul>
  )
};

export default todoItems;
