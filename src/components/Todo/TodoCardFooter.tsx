import React, { useState } from 'react';
import { ColorOptions } from '../ColorOptions';

export const TodoCardFooter = (props: any) => {
  const [visibleColor, setVisibleColor] = useState(false);

  const setColor = (color: string) => {
    props.setColor(color);
    setVisibleColor(false);
  };

  return (
    <React.Fragment>
      <div className='card-footer'>
        <div className='d-inline-flex'>
          <button
            type='button'
            className='todo-card-action'
            onClick={() => setVisibleColor(visibleColor)}>
            <i className='mdi mdi-brush' />
          </button>
          <button
            type='button'
            aria-label='Bullet Points'
            onClick={props.toggleBullets}
            className='todo-card-action bullets-btn'>
            <i className='mdi mdi-format-list-bulleted' />
          </button>
          <button
            type='button'
            aria-label='Delete'
            onClick={() => props.deleteTodo()}
            className='btn todo-card-action'>
            <i className='mdi mdi-delete' />
          </button>
          {props.isChanged && (
            <button
              type='button'
              aria-label='Undo'
              onClick={() => props.undo()}
              className='todo-card-action'>
              <i className='mdi mdi-undo' />
            </button>
          )}
        </div>
        <button
          type='button'
          aria-label='Save'
          onClick={() => props.close()}
          className='btn btn-light close-btn'>
          Ok
        </button>
      </div>
      <ColorOptions
        visibleColor={visibleColor}
        setColor={color => setColor(color)}
      />
    </React.Fragment>
  );
};
