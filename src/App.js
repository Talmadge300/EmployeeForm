import React, { useState, useEffect } from 'react';
import EmployeeForm from './EmployeeForm';

function App() {
  // Step 1: Load employees from Local Storage when the app starts
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  // Step 2: Save employees to Local Storage whenever it changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Step 3: Function to add a new employee
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <div>
      <h1>Employee Form</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <h2>Employee List</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>
            {employee.name} - {employee.email} - {employee.title} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


