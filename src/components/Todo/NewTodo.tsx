import React from 'react';
import TodoPlaceHolder from './TodoPlaceHolder';
import { TodoCard } from './TodoCard';
import { useSquawk } from '../store';

const withTodoPlaceholder = (WrappedComponent: React.ElementType) => (
  props: any
) => {
  return !props.todo.content ? (
    <TodoPlaceHolder {...props} />
  ) : (
    <WrappedComponent {...props} />
  );
};

const ElementType = withTodoPlaceholder(TodoCard);
const { newTodo } = useSquawk('newTodo');

export const NewTodo = () => <ElementType todo={newTodo} />;
