import React, { useState, useEffect } from 'react';
import { getAllTodos } from '../utils/mockData';
import Todo from '../models/Todo';
import { TodoCard } from '../components/TodoCard';

// const withTodoPlaceholder = WrappedComponent => ({ newTodo, ...others }) => {
//     return !newTodo.content ?
//         <TodoPlaceHolder newTodo={newTodo} {...others} /> :
//         <WrappedComponent todo={newTodo} {...others} />;
// };

// const TodoPlaceholder = withTodoPlaceholder(TodoNew);

export const Todos = () => {
  const [todos, updateTodos] = useState<Todo[]>([]);
  const [activeTodo, setActiveTodo] = useState<number>(-1);

  useEffect(() => {
    getAllTodos().then(response => {
      updateTodos(response);
    });
  }, []);

  const save = (todo: Todo) => {
    todos.push(todo);
  };

  const cancelEdit = () => {
    // TODO
  };

  const deleteTodo = (id: number) => {
    // TODO
  };

  return (
    <div className={'todo-cards' + (false ? ' is-active' : '')}>
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          todo={todo}
          setActive={() => setActiveTodo(todo.id)}
          isActive={activeTodo === todo.id}
          save={newTodo => save(newTodo)}
          delete={() => deleteTodo(todo.id)}
          onCancel={() => cancelEdit()}
        />
      ))}
    </div>
  );
};
