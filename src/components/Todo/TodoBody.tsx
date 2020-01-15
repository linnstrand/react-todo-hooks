import React from 'react';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';

export const TodoBody = (props: {
  content: string;
  targetRef: React.RefObject<HTMLElement>;
  onChange: (content: string) => void;
  setActive: (state: boolean) => void;
}) => (
  <ContentEditable
    html={props.content}
    innerRef={props.targetRef}
    className={'card-text'}
    onChange={(event: ContentEditableEvent) =>
      props.onChange(event.target.value)
    }
    onFocus={() => props.setActive(true)}
    onBlur={() => props.setActive(false)}
  />
);
