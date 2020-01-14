export const setBullet = (content: string): string  => {
  if (!content) {
    return '<ul><li></li></ul>';
  }
  if (content.includes('<li>')) {
    content = content.replace(/(<ul>||<\/ul>)+/g, '');
    content = content.replace(/li>+/g, 'div>');
  } else {
    content = content.replace(/div>+/g, 'li>');
    if (!content.startsWith('<li>')) {
      content = `<li>${content}</li>`;
    }
    content = `<ul>${content}</ul>`;
  }
  return content;
};

export const cleanTodo = (content: string): string => {
  content = content.replace('<li></li>', '');
  content = content.replace('<li><br></li>', '');
  return content;
};
