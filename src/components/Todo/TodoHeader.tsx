import React from 'react';
import ContentEditable from 'react-contenteditable';

export const TodoHeader = (props: {
  name: string;
  onChange: (change: string) => any;
  setActive: (a: boolean) => any;
}) => {
  return (
    <React.Fragment>
      {!props.name && (
        <div className='position-absolute new-todo-text todo-placeholder-title'>
          No title set
        </div>
      )}
      <ContentEditable
        html={props.name || ''}
        className={'card-title h5'}
        onChange={(event: { target: { value: string } }) =>
          props.onChange(event.target.value)
        }
        onFocus={() => props.setActive(true)}
        onBlur={() => props.setActive(false)}
      />
    </React.Fragment>
  );
};
