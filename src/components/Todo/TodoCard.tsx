import React, { useEffect } from 'react';
import { setBullet } from './todoService';
import TodoCardFooter from './TodoCardFooter';
import TodoHeader from './TodoHeader';
import { TodoBody } from './TodoBody';

export const TodoCard = (props: any) => {
  const cardRef = React.createRef();
  const inputRef = React.createRef();

  const state = {
    originalTodo: { ...props.todo },
    titleActive: false,
    contentActive: false
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    const current = inputRef.current;
    if (isNew() && current) {
      const range = document.createRange();
      var sel = window.getSelection();
      range.setStart(current, 1);
      range.collapse(true);
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(range);
      }
      current.focus();
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const isNew = () => props.todo.id === 0;

  // close todo if leaving focus
  const handleClickOutside = (e: { target: any }) => {
    // If this todo is active, and the card doesn't contain the cliched element, accept changes.
    if (isActive() && !cardRef.current.contains(e.target)) {
      close();
    }
  };

  const isActive = () => state.contentActive || state.titleActive;

  const undo = () => {
    props.updateTodo(state.originalTodo);
    close();
  };

  const toggleBullets = () => {
    let todo = setBullet(props.todo);
    onChange(todo);
  };

  const onChange = (changed: any) => {
    changed.hasBullets = changed.content.includes('<li>');
    if (props.onChange) {
      props.onChange(changed);
    } else {
      props.updateTodo(changed);
    }
  };

  const isChanged = () =>
    props.todo.name !== state.originalTodo.name ||
    props.todo.content !== state.originalTodo.content;

  const close = () => {
    // setState({ titleActive: false, contentActive: false });
  };

  return (
    <div
      ref={cardRef}
      className={`todo-card card${isActive() ? ' is-editing' : ''}${
        todo.hasBullets ? ' bullets-active' : ''
      }`}
      style={{ backgroundColor: todo.color || '#fff' }}>
      <TodoHeader
        name={todo.name}
        onChange={name => onChange({ ...todo, name: name })}
        setActive={state => setState({ titleActive: state })}
      />
      <TodoBody
        content={todo.content}
        targetRef={inputRef}
        onChange={content => onChange({ ...todo, content: content })}
        setActive={state => setState({ contentActive: state })}
      />
      <TodoCardFooter
        isChanged={isChanged() && !isNew()}
        toggleBullets={() => toggleBullets()}
        deleteTodo={() => props.deleteTodo(todo.id)}
        setColor={color => onChange({ ...todo, color: color })}
        undo={() => undo()}
        close={() => close()}
      />
    </div>
  );
};
