import React from 'react';
import { Button } from 'react-bootstrap';

function CustomButtons({ buttons }) {
  return (
    <div>
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant={button.variant || 'primary'}
          onClick={button.onClick}
        >
          {button.label}
        </Button>
      ))}
    </div>
  );
}

export default CustomButtons;
