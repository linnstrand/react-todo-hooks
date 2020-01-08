import React, { Props, useState, useEffect } from 'react';
import Todo from '../models/Todo';
import { CheckButton } from './CheckButton';

interface TodoProps {
  todo: Todo;
  isActive: boolean;
  setActive: () => void;
  delete: () => void;
  onCancel: () => void;
  save: (todo: Todo) => void;
}

export const TodoCard = (props: TodoProps) => {
  const isChanged = false;
  const [editingObject, setEditingObject] = useState<Todo>({ ...props.todo });

  const TextNote = (text: string) => (
    <div className='card-text'>
      <input
        type='text'
        value={text}
        onChange={({ currentTarget: { value } }) => setEditingObject({ ...editingObject, content: value })}
      />
    </div>
  );

  const BulletNote = (text: string[]) => (
    <ul className='card-text'>
      {text.map(t => (
        <li>{t}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <div className={`todo-card card' ${props.isActive ? ' is-editing' : ''}`}>
        <div className='card-body' onClick={() => props.setActive()}>
          {!editingObject.name && <div className='position-absolute new-todo-text todo-placeholder'>Title</div>}
          <div>
            <input
              className='card-title'
              type='text'
              value={editingObject.name}
              onChange={({ currentTarget: { value } }) => setEditingObject({ ...editingObject, name: value })}
            />
          </div>
          {Array.isArray(editingObject.content) ? BulletNote(editingObject.content) : TextNote(editingObject.content)}
        </div>
        <div className='card-footer'>
          <button aria-label='Delete' type='button' className='todo-card-action' onClick={() => props.delete()}>
            <i className='material-icons'>delete</i>
          </button>
          {isChanged && (
            <button type='button' aria-label='Undo' onClick={props.onCancel} className='todo-card-action'>
              <i className='mdi mdi-undo' />
            </button>
          )}

          {props.isActive && (
            <button
              type='button'
              aria-label='Save'
              onClick={() => props.save(editingObject)}
              className='todo-card-action'>
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
