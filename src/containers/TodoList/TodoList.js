import React, {Component} from 'react';
import Wrapper from '../../components/UI/Wrapper/Wrapper';

class TodoList extends Component {
  state = {
    items: [
      {id: 'asd1', title: 'item1'},
      {id: 'asd2', title: 'item2'},
      {id: 'asd3', title: 'item3'}
    ]
  };

  render() {
    return (
      <Wrapper>
        <ul>
          <li>todo item</li>
          <li>todo item</li>
          <li>todo item</li>
          <li>todo item</li>
        </ul>
      </Wrapper>
    )
  }
}

export default TodoList;
