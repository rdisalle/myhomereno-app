import React, { Component } from 'react';
import './AddProject.css';
import config from '../config';
import MyHomeRenoContext from '../MyHomeRenoContext';
import PropTypes from 'prop-types';

class AddProject extends Component {
    static contextType = MyHomeRenoContext;

    addNewProject = project => {    
        fetch(`${config.API_ENDPOINT}/api/projects/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(project),
        })
          .then(res => {
            return res.json();
          })
          .then(resJSON => this.context.addProject(resJSON))
          .catch(error => {
            console.error({ error });
            return "There was an error with the request. Try again later.";
          });
      };

      handleFormSubmit = e => {
        e.preventDefault(e);
        const newProject = {
            name: e.target.name.value,
            estimated_cost: e.target.estimated_cost.value,
            total_time: e.target.total_time.value,
            room: e.target.room.value,
            details: e.target.details.value,
            type: e.target.type.value,
            status: e.target.status.value,
            summary: e.target.summary.value,
        };
        this.addNewProject(newProject);
        this.props.history.push('/view-current-project-list');
    };

    handleClickCancel = () => {
        this.props.history.push('/view-current-project-list');
      };

  render() {
    return (
      <div className="AddProject">
        <div className="AddProject_heading">
          <h1>Add Project!</h1>
        </div>
        <form 
            className='AddProject_form'
            onSubmit={e => this.handleFormSubmit(e)}
        >
        <div>
            <label htmlFor="name">
                Name: {' '}
                {this.context.newProject.name.touched}
            </label>
            <input
                className="AddProjectPage_form"
                type="text"
                name="name"
                id="name"
                required={true}
                aria-label="Name"
                onChange={e =>
                    this.context.updateNewProjectData(e.target.name, e.target.value)
                }
            />
        </div>
        <div>
            <label htmlFor="estimated_cost">
                Estimated Cost: {' '}
                {this.context.newProject.estimated_cost.touched}
            </label>
            <input
                className="AddProjectPage_form"
                type="text"
                name="estimated_cost"
                id="estimate_cost"
                required={true}
                aria-label="estimated_cost"
                onChange={e =>
                    this.context.updateNewProjectData(e.target.estimated_cost, e.target.value)
                }
            />
        </div>
        <div>
            <label htmlFor="total_time">
                Total Time: {' '}
                {this.context.newProject.total_time.touched}
            </label>
            <input
                className="AddProjectPage_form"
                type="text"
                name="total_time"
                id="total_time"
                required={true}
                aria-label="total_time"
                onChange={e =>
                    this.context.updateNewProjectData(e.target.total_time, e.target.value)
                }
            />
        </div>
        <div>
            <label htmlFor="room">
                Room: {' '}
                {this.context.newProject.room.touched}
            </label>
            <input
                className="AddProjectPage_form"
                type="text"
                name="room"
                id="room"
                required={true}
                aria-label="room"
                onChange={e =>
                    this.context.updateNewProjectData(e.target.room, e.target.value)
                }
            />
        </div>
        <div>
            <label htmlFor="details">
                Details: {' '}
                {this.context.newProject.details.touched}
            </label>
            <input
                className="AddProjectPage_form"
                type="text"
                name="details"
                id="details"
                required={true}
                aria-label="details"
                onChange={e =>
                    this.context.updateNewProjectData(e.target.details, e.target.value)
                }
            />
        </div>
        <div>
            <label htmlFor="type">
                Type: {' '}
            </label>
            <select
                className="AddProjectPage_form"
                name="type"
                id="type"
                required={true}
                aria-label="type"
                onChange={e =>
                    this.context.updateNewProjectData(e.target.type, e.target.value)
                }
            >
            <option>
            {'DIY'}
            </option>
            <option>
            {'Contractor'}
            </option>
            </select>
        </div>
        <div>
            <label htmlFor="status">
                Status: {' '}
            </label>
            <select
                className="AddProjectPage_form"
                name="status"
                id="status"
                required={true}
                aria-label="status"
                onChange={e =>
                    this.context.updateNewProjectData(e.target.status, e.target.value)
                }
            >
            <option>
            {'Not Started'}
            </option>
            <option>
            {'In Progress'}
            </option>
            <option>
            {'Completed'}
            </option>
            </select>
        </div>
        <div>
            <label htmlFor="summary">
                Summary: {' '}
                {this.context.newProject.summary.touched}
            </label>
            <input
                className="AddProjectPage_form"
                type="text"
                name="summary"
                id="summary"
                required={true}
                aria-label="summary"
                onChange={e =>
                    this.context.updateNewProjectData(e.target.summary, e.target.value)
                }
            />
        </div>
        <div className="AddProject_buttons">
                <button className="AddProject_commands" type='button' onClick={this.handleClickCancel}>
                    Cancel
                </button>
                <button className="AddProject_commands" type='submit'>
                    Add
                </button>
            </div>
        </form>
        </div>
    );
  };
};

AddProject.propTypes = {
    history: PropTypes.object
  };

export default AddProject;