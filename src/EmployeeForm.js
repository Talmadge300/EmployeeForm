import React, { Component } from 'react';
import './EmployeeForm.css'; // Import CSS for styling

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: '',
    };
  }

  // Input changes and updates state
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Form submission
  handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    console.log('Employee Details:', this.state);
    this.setState({ name: '', email: '', title: '', department: '' }); // Clears form
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Job Title:
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Department:
          <input type="text" name="department" value={this.state.department} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;
