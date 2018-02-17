import React from 'react';

const TodoList = props => {
  const dataList = this.props.dataLists.map(data => {
    return (
      <li onClick={this.removeTodo(data.id)} key={data.id}>{data.text}</li>
    )
  });
  return <ul>{dataList}</ul>
};

export default TodoList;