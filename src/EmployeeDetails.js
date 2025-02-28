import React from "react";
import { useParams } from "react-router-dom"; // Hook to access route parameters
import "./styles.css";

function EmployeeDetails({ employees }) {
  const { id } = useParams(); // Get Employee ID from URL
  console.log('ID from URL:', id); // Check if the ID is being passed correctly

  // Find the employee using the EmployeeId from URL
  const employee = employees.find((emp) => emp.EmployeeId.toString() === id);
  
  if (!employee) {
    return <h2>Employee not found</h2>; // Show message if employee not found
  }

  return (
    <div className="employee-details">
      <h1>{employee.name}</h1>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Job Title:</strong> {employee.title}</p>
      <p><strong>Department:</strong> {employee.department}</p>
    </div>
  );
}

export default EmployeeDetails;
