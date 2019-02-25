import React, {Component} from 'react';
import TodoForm from '../../components/Todo/TodoForm/TodoForm';
import TodoItems from '../../components/Todo/TodoItems/TodoItems';
import Wrapper from '../../components/UI/Wrapper/Wrapper';

class TodoList extends Component {
  state = {
    items: [
      {id: 'asd1', title: 'item1'},
      {id: 'asd2', title: 'item2'},
      {id: 'asd3', title: 'item3'}
    ]
  };

  setState(state, callback) {
    super.setState(state, this.saveCurrentState);
    console.log('[Todo] setState');
  }

  componentDidMount() {
    console.log('[Todo] componentDidMount');
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
    if(result.length) {
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
    for (let i = 0; i < newItems.length; i++) {
      if (newItems[i].id === itemId) {
        newItems[i].completed = !newItems[i].completed;
        break;
      }
    }
    this.setState(newItems);
  };

  render() {
    return (
      <Wrapper title="My ToDo List">
        <TodoForm submit={this.addItem}/>
        <TodoItems items={this.state.items}
                   toggleComplete={this.toggleCompleteItem}
                   delete={this.removeItem}/>
      </Wrapper>
    )
  }
}

export default TodoList;
