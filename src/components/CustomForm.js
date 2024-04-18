import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function CustomForm({ formFields, onSubmit, customClassName = '' }) {
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    formFields.forEach((field) => {
      initialData[field.id] = field.value || '';
    });
    return initialData;
  });

  const handleInputChange = (e, fieldId) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [fieldId]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form className={`${customClassName}`} onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <Form.Group key={field.id} controlId={field.id}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.id]}
            onChange={(e) => handleInputChange(e, field.id)}
            className={customClassName}
          />
        </Form.Group>
      ))}
      <Button variant="primary" type="submit" className={`${customClassName}`}>
        Submit
      </Button>
    </Form>
  );
}

export default CustomForm;
