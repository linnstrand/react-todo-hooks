import React from 'react';
import Todo from '../../models/Todo';
import { NewTodo } from './NewTodo';
import { TodoCard } from './TodoCard';
import { useSquawk } from '../store';

export const Todos = () => {
  const { todos } = useSquawk('todos');

  return (
    <React.Fragment>
      <div className='mdl-grid new-todo-card'>
        <NewTodo />
      </div>
      <div className='mdl-grid'>
        {todos.map((todo: Todo) => (
          <div
            key={todo.id}
            className={'d-inline-flex align-items-start flex-wrap'}>
            <TodoCard todo={todo} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
