import React from 'react';
import { Button } from 'react-bootstrap';

function CustomButtons({ buttons }) {
  return (
    <div className="d-grid gap-2 mb-3">
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
