import React from 'react';
import style from './TodoList.css'

const TodoList = props => {
  const dataList = props.dataLists.map(data => {
    return (
      <li onClick={() => props.removeTodo(data.id)} key={data.id} className={style.item}>{data.text}</li>
    )
  });
  return <ul className={style.todoList}>{dataList}</ul>
};

export default TodoList;