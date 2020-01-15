import { COLORS } from '../colors';
export default class Todo {
  name: string = '';
  id: number = 0;
  content: string = '';
  color: string = COLORS[0].hex;
  hasBullets?: boolean = false;
}