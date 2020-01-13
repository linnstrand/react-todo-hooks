import React, { useState, useEffect } from 'react';
import Todo from '../../models/Todo';
import { getAllTodos } from '../../utils/mockData';
import { NewTodo } from './NewTodo';
import { TodoCard } from './TodoCard';

export const Todos = () => {
  const [todos, updateTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodos().then(response => {
      updateTodos(response);
    });
  }, []);

  return (
    <React.Fragment>
      <div className='d-flex new-todo-card'>
        <NewTodo />
      </div>
      {todos.map((todo: { id: string | number | undefined }) => (
        <div
          key={todo.id}
          className={'d-inline-flex align-items-start flex-wrap'}>
          <TodoCard todo={todo} />
        </div>
      ))}
    </React.Fragment>
  );
};
