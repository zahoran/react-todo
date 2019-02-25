import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import PropTypes from 'prop-types';

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

todoItems.propTypes = {
  items: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
};

export default todoItems;
