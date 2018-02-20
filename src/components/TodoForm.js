import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        type='text'
        placeholder='add todo'
        value={props.value}
      />
      <button
        onClick={() => {props.add()}}>Add Todo</button>
    </form>
  )
};

export default TodoForm;