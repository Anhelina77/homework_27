import React from 'react';
import TodoAdd from 'components/Todo/TodoAdd';

export default function TodoHeader(props) {
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoAdd {...props} />
    </header>
  );
}
