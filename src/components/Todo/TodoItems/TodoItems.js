import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import PropTypes from 'prop-types';

const todoItems = (props) => {
  let items = null;
  if (props.items && props.items.length) {
    items =
      props.items.map((item) => {
        return <TodoItem key={item.id}
                         delete={props.delete}
                         toggleComplete={props.toggleComplete}
                         item={item}/>
      })

  } else {
    items = <p>Please start adding items!</p>
  }
  return (
    <ul className="list-group">
      {items}
    </ul>
  )
};

//define the mandatory inputs for this component
todoItems.propTypes = {
  items: PropTypes.array.isRequired
};

export default todoItems;
