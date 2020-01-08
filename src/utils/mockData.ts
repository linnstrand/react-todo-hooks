import Todo from '../models/Todo';

const initialState: Todo[] = [
  {
    id: 1, name: 'Shopping',
    content: ['Chicken', 'Yoghurt', 'Gouda'],
    hasBullets: true
  },
  { id: 2, name: 'Book Hair Appointment', content: 'Soon!' }
];


export function getAllTodos(): Promise<Todo[]> {
  return Promise.resolve(initialState)
}