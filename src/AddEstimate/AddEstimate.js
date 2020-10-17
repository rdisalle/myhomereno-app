import React, { Component } from 'react';
import './AddEstimate.css';
import config from '../config';
import MyHomeRenoContext from '../MyHomeRenoContext';
import PropTypes from 'prop-types';

class AddEstimate extends Component {
    static propTypes = {
        match: PropTypes.shape({
          params: PropTypes.object,
        }),
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };

    static contextType = MyHomeRenoContext;

    addNewEstimate = estimate => {    
        fetch(`${config.API_ENDPOINT}/api/estimates/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(estimate),
        })
          .then(res => {
            return res.json();
          })
          .then(resJSON => this.context.addEstimate(resJSON))
          .catch(error => {
            console.error({ error });
            return "There was an error with the request. Try again later.";
          })
      }
      parseProjects = () => {
        return this.context.projects.map(project => (
          <option key={project.id} name={project.id} value={project.id}>
            {project.name}
          </option>
        ));
      };

      handleFormSubmit = e => {
        const { projectId } = this.props.match.params;
        e.preventDefault(e);
        const newEstimate = {
            name: e.target.name.value,
            project_id: e.target.project_id.value,
            contractor_name: e.target.contractor_name.value,
            price: e.target.price.value,
            details: e.target.details.value,
            total_time: e.target.total_time.value
        }
        this.addNewEstimate(newEstimate);
        this.props.history.push(`/view-project-estimates/${projectId}`);
    };

    handleClickCancel = () => {
        const { projectId } = this.props.match.params
        this.props.history.push(`/view-project-estimates/${projectId}`);
      };
    

  render() {
    return (
      <div className="AddEstimate">
        <div className="AddEstimate_heading">
          <h1>Add Estimate!</h1>
        </div>
        <form 
            className="AddEstimate_form"
            onSubmit={e => this.handleFormSubmit(e)}
        >
            <div>
            <label htmlFor="name">
                Estimate Name: {' '}
                {this.context.newEstimate.name.touched}
            </label>
            <input 
                className="AddEstimatePage_form"
                type="text" 
                name="name"
                id="name"
                required={true}
                aria-label="name"
                onChange={e =>
                    this.context.updateNewEstimateData(e.target.name, e.target.value)
                } 
            />
            </div>
            <div>
            <label htmlFor="project">
                Select Project: {' '}
            </label>
            <select 
                className="AddEstimatePage_form"
                name="project_id"
                id="project_id"
                required={true}
                aria-label="project_id"
                onChange={e =>
                    this.context.updateNewEstimateData(e.target.project_id, e.target.value)
                } 
            >
            {this.parseProjects()}
            </select>
            </div>
            <div>
            <label htmlFor="contractor_name">
                Contractor Name: {' '}
                {this.context.newEstimate.contractor_name.touched}
            </label>
            <input 
                className="AddEstimatePage_form"
                type="text" 
                name="contractor_name"
                id="contractor_name"
                required={true}
                aria-label="name"
                onChange={e =>
                    this.context.updateNewEstimateData(e.target.contractor_name, e.target.value)
                } 
            />
            </div>
            <div>
            <label htmlFor="price">
                Price: {' '}
                {this.context.newEstimate.price.touched}
            </label>
            <input 
                className="AddEstimatePage_form"
                type="text" 
                name="price"
                id="price"
                required={true}
                aria-label="price"
                onChange={e =>
                    this.context.updateNewEstimateData(e.target.price, e.target.value)
                } 
            />
            </div>
            <div>
            <label htmlFor="details">
                Details: {' '}
                {this.context.newEstimate.details.touched}
            </label>
            <input 
                className="AddEstimatePage_form"
                type="text" 
                name="details"
                id="details"
                required={true}
                aria-label="details"
                onChange={e =>
                    this.context.updateNewEstimateData(e.target.details, e.target.value)
                } 
            />
            </div>
            <div>
            <label htmlFor="total_time">
                Time: {' '}
                {this.context.newEstimate.total_time.touched}
            </label>
            <input 
                className="AddEstimatePage_form"
                type="text" 
                name="total_time"
                id="total_time"
                required={true}
                aria-label="total_time"
                onChange={e =>
                    this.context.updateNewEstimateData(e.target.total_time, e.target.value)
                } 
            />
            </div>
        <div className="AddEstimate_buttons">
            <button className="AddEstimate_commands" type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            <button className="AddEstimate_commands" type='submit'>
              Add
            </button>
          </div>
        </form>
        </div>
    );
  }
}

AddEstimate.propTypes = {
    history: PropTypes.object
  };


export default AddEstimate;
