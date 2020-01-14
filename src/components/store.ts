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
    { id: 2, name: 'Book Hair Appointment', content: '<div>Soon!</div>', color: COLORS[1].hex }
  ],
  newTodo: { name: '', content: '', id: 0, color: COLORS[0].hex }
};

interface RootStore {
  todos: Todo[],
  newTodo: Todo
}
export const { action, update, useSquawk } = createStore<RootStore>(initialState);

export const updateNewTodo = action<Todo>((store, todo) => {
  return {
    newTodo: { name: '', content: '', id: 0, color: COLORS[0].hex },
    todos: [...store.todos, todo]
  };
});

export const updateTodo = action<Todo>((store, todo) => {
  let newList = store.todos.map(item =>
    item.id === todo.id ? todo : item
  );
  return { ...store, todos: newList };
});

export const deleteTodo = action((store: RootStore, id: number) => {
  if (id === 0) {
    return { newTodo: { name: '', content: '', id: 0, color: COLORS[1].hex } };
  }
  return { todos: store.todos.filter(todo => todo.id !== id) };
})