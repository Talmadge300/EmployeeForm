import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "./EmployeeDetails";
import "./styles.css"; 

function App() {
  // Employees from localStorage or initialize an empty array
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  // Save employees to localStorage when the list updates
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Add a new employee
  const addEmployee = (employee) => {
    const newEmployee = { ...employee, EmployeeId: Date.now() }; 
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  // Delete an employee
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.EmployeeId !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="nav-link">Add Employee</Link>
          <Link to="/employees" className="nav-link">Employee List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<EmployeeForm addEmployee={addEmployee} />} />
          <Route path="/employees" element={<EmployeeList employees={employees} deleteEmployee={deleteEmployee} />} />
          <Route path="/employees/:id" element={<EmployeeDetails employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

