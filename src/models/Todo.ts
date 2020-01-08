export default interface Todo {
  name: string;
  id: number;
  content: string | string[];
  hasBullets?: boolean;
}