import React from 'react'
import CustomNavbar from '../components/Navbar';
import CustomForm from '../components/CustomForm';
import './customizations.css';

export default function FormPenjualan( { customClassNames }) {
    const customLinks = [
        { url: "#custom-home", text: "Home" },
        { url: "#custom-about", text: "About" },
        { url: "#custom-contact", text: "Contact" },
      ];
    
      const handleSubmit = (formData) => {
        console.log('Form Data:', formData);
        // Lakukan sesuatu dengan data formulir, seperti mengirimnya ke backend, dll.
      };
    
      const formFields = [
        {
          id: 'name',
          label: 'Name',
          type: 'text',
          placeholder: 'Enter your name',
          value: '',
        },
        {
          id: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
          value: '',
        },
      ];
    
  return (
    <>
          <CustomNavbar brandText="Penjualan" links={customLinks} />
          <div>
          <CustomForm formFields={formFields} onSubmit={handleSubmit} customClassNames={customClassNames} />
          </div>
    </>
  )
}