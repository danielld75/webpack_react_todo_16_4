import React from 'react';
import style from './TodoForm.css'

const TodoForm = props => {
  return (
    <div className={style.todoForm}>
      <form onSubmit={props.handleSubmit}>
        <label>
          To Do:
          {' '}
          <input
            type='text'
            placeholder='add todo'
            value={props.value}
            onChange={props.updateValue}
          />
        </label>
        <input type={"submit"} onClick={props.addTodo} value={"Add Todo"}/>
      </form>
    </div>
    )
};

export default TodoForm;