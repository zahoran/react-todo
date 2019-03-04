import React, {Component} from 'react';
import {connect} from 'react-redux';

import TodoForm from '../../components/Todo/TodoForm/TodoForm';
import TodoItems from '../../components/Todo/TodoItems/TodoItems';
import Wrapper from '../../components/UI/Wrapper/Wrapper';
import TodoProgress from '../../components/Todo/TodoProgress/TodoProgress';

class TodoList extends Component {
  state = {
    items: [
      {id: 'asd1', title: 'item1'},
      {id: 'asd2', title: 'item2'},
      {id: 'asd3', title: 'item3'}
    ]
  };

  //whenever we update the state object, we save it in local storage.
  setState(state, callback) {
    super.setState(state, this.saveCurrentState);
  }

  //checks for available state stored in the browser
  componentDidMount() {
    let savedItems = localStorage.getItem('todo:items');
    if (savedItems) {
      savedItems = JSON.parse(savedItems);
      this.setState({items: savedItems});
    }
  }

  saveCurrentState() {
    localStorage.setItem('todo:items', JSON.stringify(this.state.items));
  }

  generateId = () => {
    return Math.floor(Math.random() * 90000) + 10000;
  };

  addItem = (itemTitle) => {
    const result = this.state.items.filter((item) => {
      return item.title === itemTitle;
    });
    if (result.length) {
      console.log(itemTitle, "is already on the list");
    } else {
      const newItem = {
        id: this.generateId().toString(),
        title: itemTitle,
        completed: false
      };
      const items = this.state.items.concat(newItem);
      this.setState({items: items});
    }
  };

  removeItem = (itemId) => {
    const newItems = this.state.items.filter(function (el) {
      return el.id !== itemId;
    });
    this.setState({items: newItems});
  };

  toggleCompleteItem = (itemId) => {
    const newItems = this.state.items;
    const index = newItems.findIndex(
      item => item.id === itemId);
    newItems[index].completed = !newItems[index].completed;
    this.setState(newItems);
  };

  render() {
    return (
      <Wrapper title="My ToDo List">
        <TodoForm submit={this.props.onAddItem}/>
        <TodoItems items={this.props.items}
                   toggleComplete={this.toggleCompleteItem}
                   delete={this.props.onRemoveItem}/>
        <TodoProgress items={this.props.items}/>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.todoItems
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (newItem) => dispatch({type: 'ADD_ITEM', value: newItem}),
    onRemoveItem: (itemId) => dispatch({type: 'REMOVE_ITEM', value: itemId})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
