import React from 'react';
import './EmployeeForm.css';

export class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with required fields set to empty strings
    this.state = {
      name: '',
      email: '',
      phone: '',
      title: '',
      department: ''
    };

    // Bind event handlers to 'this'
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // onChange handler that updates the component state for each input field
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // onSubmit handler
  handleSubmit(event) {
    // 1. Prevent the page from refreshing
    event.preventDefault();

    // 2. Log the current state to the console
    console.log("New Employee Data:", this.state);

    // Call the parent's submit action if provided (for API integration)
    if (this.props.onSubmitAction) {
      this.props.onSubmitAction(this.state);
    }

    // 3. Reset the state to clear the form
    this.setState({
      name: '',
      email: '',
      phone: '',
      title: '',
      department: ''
    });
  }

  render() {
    return (
      <div className="employee-form-container">
        <h2 className="employee-form-header">Add New Employee</h2>
        
        <form className="employee-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="e.g. Jane Doe"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="jane.doe@company.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="(555) 123-4567"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title" className="form-label">Job Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="Software Engineer"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="department" className="form-label">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                className="form-input"
                value={this.state.department}
                onChange={this.handleChange}
                placeholder="Engineering"
                required
              />
            </div>
          </div>

          <button type="submit" className="form-submit-btn">
            Add
          </button>
        </form>
      </div>
    );
  }
}
