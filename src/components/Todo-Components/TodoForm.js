import React from 'react';

const TodoForm = props => {
  return (
    <form>
      <input
        className="text-area"
        name = 'todo'
        value = {props.value}
        type = 'text'
        onChange = {props.inputChangeHandler}
        placeholder = 'enter a task'/>
        <button
          className="add"
          onClick = {props.addTask}> + </button>
        <button
          className="remove"
          onClick = {props.removeItems}> x </button>
    </form>
  )
}

export default TodoForm;
