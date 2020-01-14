import React, { useEffect } from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import { setBullet } from './todoService';

export const TodoPlaceHolder = (props: any) => {
  const inputRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleChange = (event: { target: { value: any } }) => {
    let changed = { ...props.todo };
    changed.content = event.target.value;
    props.onChange(changed);
  };

  const toggleBullets = () => {
    props.onChange(setBullet(props.todo.content));
  };

  return (
    <div className='d-flex card todo-card todo-placeholder'>
      <div className='new-todo-body'>
        <div className='new-todo-text'>
          {!props.todo.content && (
            <div className='position-absolute new-todo-text todo-placeholder-title'>
              Write a note!
            </div>
          )}
          <ContentEditable
            html={props.todo.content || ''}
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
