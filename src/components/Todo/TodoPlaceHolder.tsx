import React, { useEffect } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { setBullet } from './todoService';
import { updateNewTodo } from '../store';

export const TodoPlaceHolder = (props: any) => {
  const inputRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleChange = (event: { target: { value: any } }) => {
    updateNewTodo({ ...props.todo, content: event.target.value });
  };

  const toggleBullets = () => {
    const content = setBullet(props.todo.content);
    updateNewTodo({ ...props.todo, content: content });
  };

  return (
    <div className='d-flex card todo-card todo-placeholder'>
      <div className='new-todo-body'>
        <div className='new-todo-text'>
          <div className='position-absolute new-todo-text todo-placeholder-title'>
            Write a note!
          </div>
          <ContentEditable
            html={props.todo.content}
            innerRef={inputRef}
            className={'new-todo-text new-todo-content'}
            onChange={(event: ContentEditableEvent) => handleChange(event)}
          />
        </div>
      </div>
      <div className='new-todo-menu'>
        <button
          type='button'
          aria-label='Bullet Points'
          onClick={toggleBullets}
          className={'todo-card-action'}>
          <i className='mdi mdi-format-list-bulleted' />
        </button>
      </div>
    </div>
  );
};

export default TodoPlaceHolder;
