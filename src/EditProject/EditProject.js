import React, { Component } from 'react';
import './EditProject.css';

class AddProject extends Component {
  render() {
    return (
      <div className="AddProject">
        <div className="AddProject_heading">
          <h1>Edit Project!</h1>
        </div>
        <div className="AddProject_controls">
        <form class='AddProject-form'>
        <div>
          <label for="name">Project Name</label>
          <input type="text" name='Project Name' id='Project Name' />
        </div>
        <div>
          <label for="summary">Summary</label>
          <input type="text" name='summary' id='summary' />
        </div>
        <div>
          <label for="estimated_cost">Estimated Cost</label>
          <input type="text" name='estimated_cost' id='estimated_cost' />
        </div>
        <div>
          <label for="room">Room</label>
          <input type="text" name='room' id='room' />
        </div>
        <div>
          <label for="details">Details</label>
          <input type="text" name='details' id='details' />
        </div>
        <div>
          <label for="total_time">Estimated Time</label>
          <input type="text" name='total_time' id='total_time' />
        </div>
        <div>
          <label for="type">Project Type (DIY, Contractor)</label>
          <input type="text" name='type' id='type' />
        </div>
        <div>
          <label for="status">Status (Not Started, In Progress, Completed)</label>
          <input type="text" name='status' id='status' />
        </div>
            <button type='submit'>Submit</button>
            <button>Cancel</button>
        </form>
        </div>
      </div>
    );
  }
}

export default AddProject;