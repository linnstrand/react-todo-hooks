import createStore from 'squawk-react';
import Todo from '../models/Todo';
import { COLORS } from '../colors';

const initialState: RootStore = {
  todos: [
    {
      id: 1,
      name: 'Shopping',
      content:
        '<ul><li>Chicken</li><li>Yogurt</li><li>Milk</li><li>Potatoes</ul>',
      hasBullets: true,
      color: COLORS[0].hex
    },
    {
      id: 2,
      name: 'Book Hair Appointment',
      content: '<div>Soon!</div>',
      color: COLORS[1].hex
    }
  ],
  newTodo: { name: '', content: '', id: 0, color: COLORS[0].hex }
};

interface RootStore {
  todos: Todo[];
  newTodo: Todo;
}
export const { action, update, useSquawk } = createStore<RootStore>(
  initialState
);

export const updateNewTodo = action<Todo>((store, todo) => {
  return { ...store, newTodo: { ...todo } };
});

export const finishNewTodo = action<Todo>((store, todo) => {
  todo.id = store.todos.reduce((a, b) => (a > b.id ? a : b.id), 0) + 1;
  return {
    ...store,
    todos: [todo, ...store.todos],
    newTodo: { name: '', content: '', id: 0, color: COLORS[0].hex }
  };
});

export const updateTodo = action<Todo>((store, todo) => {
  let newList = store.todos.map(item => (item.id === todo.id ? todo : item));
  return { ...store, todos: newList };
});

export const deleteTodo = action((store: RootStore, id: number) => {
  if (id === 0) {
    return { newTodo: { name: '', content: '', id: 0, color: COLORS[1].hex } };
  }
  return { todos: store.todos.filter(todo => todo.id !== id) };
});
