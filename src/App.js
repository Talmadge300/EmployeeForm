import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "./EmployeeDetails";
import "./styles.css"; 

function App() {
  // Load employees from localStorage or initialize an empty array
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  // Save employees to localStorage when the list updates
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Function to add a new employee
  const addEmployee = (employee) => {
    const newEmployee = { ...employee, EmployeeId: Date.now() }; 
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  return (
    <Router>
      <div className="container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <Link to="/" className="nav-link">Add Employee</Link>
          <Link to="/employees" className="nav-link">Employee List</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<EmployeeForm addEmployee={addEmployee} />} />
          <Route path="/employees" element={<EmployeeList employees={employees} />} />
          <Route path="/employees/:id" element={<EmployeeDetails employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
