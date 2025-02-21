import React, { useState } from 'react';
import './EmployeeForm.css';


function EmployeeForm({ addEmployee }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    department: '',
  });

  // Step 1: Handle input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Step 2: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure all fields are filled out
    if (!formData.name || !formData.email || !formData.title || !formData.department) {
      alert('Please fill out all fields');
      return;
    }

    // Step 3: Pass data to App.js
    addEmployee(formData);

    // Reset form fields
    setFormData({ name: '', email: '', title: '', department: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="title" placeholder="Job Title" value={formData.title} onChange={handleChange} />
      <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;
