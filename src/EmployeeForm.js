import React, { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    title: "",
    department: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.email && employee.title && employee.department) {
      addEmployee(employee);
      setEmployee({ name: "", email: "", title: "", department: "" });
    }
  };

  return (
    <div className="employee-form">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={employee.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={employee.email} onChange={handleChange} required />

        <label>Title:</label>
        <input type="text" name="title" value={employee.title} onChange={handleChange} required />

        <label>Department:</label>
        <input type="text" name="department" value={employee.department} onChange={handleChange} required />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
