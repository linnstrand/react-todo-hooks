import React from 'react';
import TodoPlaceHolder from './TodoPlaceHolder';
import TodoCard from './TodoCard';

const withTodoPlaceholder = (WrappedComponent: any) => (props: any) => {
  return !props.todo.content ? (
    <TodoPlaceHolder {...props} />
  ) : (
    <WrappedComponent {...props} />
  );
};

const ElementType = withTodoPlaceholder(TodoCard);

export const NewTodo = (props: any) => (
  <ElementType
    todo={props.newTodo}
    onChange={(todo: any) => props.updateNewTodo(todo)}
    done={(todo: any) => props.addTodo(todo)}
  />
);
