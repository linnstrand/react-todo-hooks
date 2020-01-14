import React from 'react';
import { COLORS } from '../colors';

export const ColorOptions = (props: { visibleColor: any; setColor: (hex: string) => void; }) => {
  return (
    <div
      className={
        'shadow-sm color-options ' + (props.visibleColor ? 'shown' : '')
      }>
      {COLORS.map((color: { hex: string; name: string }) => {
        const styling = {
          borderColor: color.hex,
          backgroundColor: color.hex
        };
        return (
          <button
            key={color.hex}
            className='color-button'
            title={color.name}
            style={styling}
            onClick={() => props.setColor(color.hex)}
            aria-label={color.name}
          />
        );
      })}
    </div>
  );
};
