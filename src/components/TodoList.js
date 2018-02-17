import React from 'react';

const TodoList = props => {
  const dataList = props.dataLists.map(data => {
    return (
      <li onClick={() => data.removeTodo(data.id)} key={data.id}>{data.text}</li>
    )
  });
  return <ul>{dataList}</ul>
};

export default TodoList;