import React, {Component} from 'react';
import {connect} from 'react-redux';

import TodoForm from '../../components/Todo/TodoForm/TodoForm';
import TodoItems from '../../components/Todo/TodoItems/TodoItems';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import TodoProgress from '../../components/Todo/TodoProgress/TodoProgress';
import * as actionTypes from '../../store/actions';

export class TodoList extends Component {

  /**
   * checks for available state stored in the browser and loads it
   */
  componentDidMount() {
    let savedItems = localStorage.getItem('todo:items');
    if (savedItems) {
      savedItems = JSON.parse(savedItems);
      this.props.onSetItems(savedItems);
    }
  }

  render() {
    return (
      <Wrapper title="My ToDo List">
        <TodoForm submit={this.props.onAddItem}/>
        <TodoItems items={this.props.items}
                   toggleComplete={this.props.onToggleCompleteItem}
                   delete={this.props.onRemoveItem}/>
        {this.props.items.length ? <TodoProgress items={this.props.items}/> : null}
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.todoList.items
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (newItem) => dispatch({type: actionTypes.ADD_ITEM, value: newItem}),
    onSetItems: (items) => dispatch({type: actionTypes.SET_ITEMS, value: items}),
    onRemoveItem: (itemId) => dispatch({type: actionTypes.REMOVE_ITEM, value: itemId}),
    onToggleCompleteItem: (itemId) => dispatch({type: actionTypes.TOGGLE_COMPLETE, value: itemId})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
