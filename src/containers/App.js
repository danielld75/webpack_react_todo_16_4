import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 1,
        text: 'clean room'
      }, {
        id: 2,
        text: 'wash the dishes'
      }, {
        id: 3,
        text: 'feed my cat'
      }],
      value: ''
    };
  }

  addTodo() {
    if (this.state.value !== '') {
      const todo = {
        text: this.state.value,
        id: uuid.v4()
      };
      const data = [...this.state.data, todo];
      this.setState({data, value: ""});
    }
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }

  updateValue(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className={style.TodoApp}>
          <Title title="Todo Application"/>
          <p>Ilość zadań: {this.state.data.length}</p>
          <TodoForm handleSubmit={this.handleSubmit.bind(this)} addTodo={this.addTodo.bind(this)}
                    updateValue={this.updateValue.bind(this)} value={this.state.value}/>
          <TodoList dataLists={this.state.data} removeTodo={this.removeTodo.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;