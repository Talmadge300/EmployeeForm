import React from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import "./styles.css";

function EmployeeDetails({ employees }) {
  const { id } = useParams(); // Get Employee ID from URL
  const navigate = useNavigate(); // Hook to navigate programmatically
  
  // Find the employee using the EmployeeId from URL
  const employee = employees.find((emp) => emp.EmployeeId.toString() === id);

  if (!employee) {
    return <h2>Employee not found</h2>; // Message if employee not found
  }

  // Handle back button click
  const handleBackClick = () => {
    navigate("/employees"); // Back to employee list
  };

  return (
    <div className="employee-details">
      <h1>{employee.name}</h1>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Job Title:</strong> {employee.title}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      
      <button onClick={handleBackClick} className="back-button">
        Back to Employee List
      </button>
    </div>
  );
}

export default EmployeeDetails;

