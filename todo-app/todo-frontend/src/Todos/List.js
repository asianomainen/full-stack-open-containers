import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map(todo =>
        <Todo completeTodo={completeTodo} deleteTodo={deleteTodo} todo={todo} />
      ).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
