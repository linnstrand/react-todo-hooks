import React, { useEffect, useState } from 'react';
import { setBullet } from './todoService';
import { TodoBody } from './TodoBody';
import { TodoHeader } from './TodoHeader';
import { TodoCardFooter } from './TodoCardFooter';
import Todo from '../../models/Todo';
import { update, deleteTodo, updateNewTodo, updateTodo } from '../store';

export const TodoCard = ({ todo }: { todo: Todo }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLDivElement>(null);

  const [originalTodo] = useState({ ...todo });
  const [titleActive, setTitleActive] = useState(false);
  const [contentActive, setContentActive] = useState(false);

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

  const isNew = () => todo.id === 0;

  // close todo if leaving focus
  const handleClickOutside = (e: { target: any }) => {
    // If this todo is active, and the card doesn't contain the cliched element, accept changes.
    if (isActive() && cardRef.current && !cardRef.current.contains(e.target)) {
      close();
    }
  };

  const isActive = () => contentActive || titleActive;

  const undo = () => {
    if (isNew()) {
      updateNewTodo(todo);
    } else {
      updateTodo(todo);
    }
    close();
  };

  const toggleBullets = () => {
    if (typeof todo.content == 'string') {
      onChange({ ...todo, content: setBullet(todo.content) });
    } else {
      onChange(todo);
    }
  };

  const onChange = (changed: any) => {
    changed.hasBullets = changed.content.includes('<li>');
    if (isNew()) {
      update('newTodo', changed);
    } else {
      update('todos', changed);
    }
  };

  const isChanged = () =>
    todo.name !== originalTodo.name || todo.content !== originalTodo.content;

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
        setActive={state => setTitleActive(state)}
      />
      <TodoBody
        content={todo.content}
        targetRef={inputRef}
        onChange={(content: string) => onChange({ ...todo, content: content })}
        setActive={(state: boolean) => setContentActive(state)}
      />
      <TodoCardFooter
        isChanged={isChanged() && !isNew()}
        toggleBullets={() => toggleBullets()}
        deleteTodo={() => deleteTodo(todo.id)}
        setColor={(color: string) => onChange({ ...todo, color: color })}
        undo={() => undo()}
        close={() => close()}
      />
    </div>
  );
};
