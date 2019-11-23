import React from 'react';

const Todo = props => {
  return (
    <div
      className="task"
      key = {props.todo.id}
      onClick = {event => {
        props.toggleComplete(props.todo.id)
      }}>
      <p>{props.todo.task}</p>
    </div>
  )
}

export default Todo;
