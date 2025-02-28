import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./styles.css";

function EmployeeList(props) {
  // Render the employee list
  return (
    <div className="employee-list-container">
      <h1>Employee List</h1>
      {props.employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul className="employee-list">
          {props.employees.map((employee) => (
            <li key={employee.EmployeeId} className="employee-item">
              <Link to={`/employees/${employee.EmployeeId}`} className="employee-link">
                {employee.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;
