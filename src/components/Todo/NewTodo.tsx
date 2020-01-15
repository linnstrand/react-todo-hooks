import React from 'react';
import TodoPlaceHolder from './TodoPlaceHolder';
import { useSquawk } from '../store';
import { TodoCard } from './TodoCard';

export const NewTodo = () => {
  const { newTodo } = useSquawk('newTodo');
  return !newTodo.content ? (
    <TodoPlaceHolder todo={newTodo} />
  ) : (
    <TodoCard todo={newTodo} />
  );
};
