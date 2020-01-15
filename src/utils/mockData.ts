import Todo from '../models/Todo';
import { COLORS } from '../colors';

const initialState: Todo[] = [
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
];

export function getAllTodos(): Promise<Todo[]> {
  return Promise.resolve(initialState);
}
