import React from 'react';
import './TodoItem.css';

const todoItem = (props) => {
  const style = ['list-group-item', 'TodoItem'];
  if (props.item.completed) {
    style.push('completed');
  }
  const removeItemClick = (e) => {
    e.stopPropagation();
    props.delete(props.item.id);
  };
  return (
    <li className={style.join(' ')} onClick={() => props.toggleComplete(props.item.id)}>
      <span>{props.item.title}</span>
      <div className="close"
           onClick={removeItemClick}>
        <span aria-hidden="true">&times;</span>
      </div>
    </li>);
};

export default todoItem;
