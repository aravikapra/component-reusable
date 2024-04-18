import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Style.css'; // Import file CSS utama // Import file CSS kustomisasi

function CustomForm({ formFields, onSubmit, customClassNames = [] }) {
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

  // Generate string of additional class names separated by space
  const additionalClassNames = customClassNames.join(' ');

  return (
    <Form className={`custom-form ${additionalClassNames}`} onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <Form.Group key={field.id} controlId={field.id}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.id]}
            onChange={(e) => handleInputChange(e, field.id)}
            className={`custom-input ${additionalClassNames}`}
          />
        </Form.Group>
      ))}
      <Button type="submit" className={`custom-button ${additionalClassNames}`}>
        Submit
      </Button>
    </Form>
  );
}

export default CustomForm;
