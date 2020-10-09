import React, { Component } from 'react';
import './EditEstimate.css';

class EditEstimate extends Component {
  render() {
    return (
      <div className="EditEstimate">
        <div className="EditEstimate_heading">
          <h1>Edit Estimate!</h1>
        </div>
        <div className="EditEstimate_controls">
        <form class='EditEstimate-form'>
        <div>
          <label for="name">Estimate Name</label>
          <input type="text" name='Estimate Name' id='Estimate Name' />
        </div>
        <div>
          <label for="contractor_name">Contractor Name</label>
          <input type="text" name='contractor_name' id='contractor_name' />
        </div>
        <div>
          <label for="price">Price</label>
          <input type="text" name='price' id='price' />
        </div>
        <div>
          <label for="details">Details</label>
          <input type="text" name='details' id='details' />
        </div>
        <div>
          <label for="total_time">Estimate Completion Time</label>
          <input type="text" name='total_time' id='total_time' />
        </div>
        <div>
          <label for="project_name">Project name</label>
          <input type="text" name='project_name' id='project_name' />
        </div>
            <button type='submit'>Submit</button>
            <button>Cancel</button>
        </form>
        </div>
      </div>
    );
  }
}

export default EditEstimate;
