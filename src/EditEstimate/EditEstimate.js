import React, { Component } from 'react';
import './EditEstimate.css';
import MyHomeRenoContext from '../MyHomeRenoContext';
import PropTypes from 'prop-types';
import config from '../config';

const Required = () => (
    <span className="EditEstimate_required">*</span>
)

class EditEstimate extends Component {
    static propTypes = {
        match: PropTypes.shape({
          params: PropTypes.object,
        }),
        history: PropTypes.shape({
          push: PropTypes.func,
        }).isRequired,
      };

    static contextType = MyHomeRenoContext;

    state = {
        error: null,
        id: '',
        name: '',
        date_created: '',
        project_id: '',
        contractor_name: '',
        price: '',
        details: '',
        total_time: ''
    };

    componentDidMount() {
        const { estimateId } = this.props.match.params;
        fetch(`${config.API_ENDPOINT}/api/estimates/${estimateId}`, {
          method: 'GET',
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error));
    
            return res.json();
          })
          .then(responseData => {
            this.setState({
                id: responseData.id,
                name: responseData.name,
                date_created: responseData.date_created,
                project_id: responseData.project_id,
                contractor_name: responseData.contractor_name,
                price: responseData.price,
                details: responseData.details,
                total_time: responseData.total_time
            });
          })
          .catch(error => {
            console.error(error);
            this.setState({ error });
          });
      };

    handleChangeName = e => {
        this.setState({ name: e.target.value });
    };

    handleChangeDate_created = e => {
        this.setState({ date_created: e.target.value});
    };

    handleChangeProject_id = e => {
        this.setState({ projcet_id: e.target.value});
    };

    handleChangeContractor_name = e => {
        this.setState({ contractor_name: e.target.value});
    };

    handleChangePrice = e => {
        this.setState({ price: e.target.value});
    };

    handleChangeDetails = e => {
        this.setState({ details: e.target.value});
    };

    handleChangeTotal_time = e => {
        this.setState({ total_time: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault()
        const { estimateId } = this.props.match.params;
        const { id, name, date_created, project_id, contractor_name, price, details, total_time } = this.state;
        const newEstimate = { id, name, date_created, project_id, contractor_name, price, details, total_time };
        fetch(`${config.API_ENDPOINT}/api/estimates/${estimateId}`, {
          method: 'PATCH',
          body: JSON.stringify(newEstimate),
          headers: {
            'content-type': 'application/json',
          },
        })
          .then(res => {
            if (!res.ok);
              return res.json().then(error => Promise.reject(error));
          })
          .then(() => {
            this.resetFields(newEstimate);
            this.context.updateEstimate(newEstimate);
            this.props.history.push(`/view-estimate-page/${estimateId}`);
          })
          .catch(error => {
            console.error(error);
            this.setState({ error });
          })
      }

      parseProjects = () => {
        return this.context.projects.map(project => (
          <option key={project.id} name={project.id} value={project.id}>
            {project.name}
          </option>
        ));
      };

      resetFields = (newFields) => {
        this.setState({
            id: newFields.id || '',
            name: newFields.name || '',
            project_id: newFields.project_id || '',
            contractor_name: newFields.contractor_name || '',
            price: newFields.price || '',
            details: newFields.details || '',
            total_time: newFields.total_time || '',
        });
      };

      handleClickCancel = () => {
        const { estimateId } = this.props.match.params;
        this.props.history.push(`/view-estimate-page/${estimateId}`);
      };

  render() {
    const { error, name, contractor_name, price, details, total_time } = this.state;
    return (
      <div className="EditEstimate">
        <div className="EditEstimate_heading">
          <h1>Edit Estimate!</h1>
        </div>
        <form 
            className="EditEstimate_form"
            onSubmit={this.handleSubmit}
        >
            <div className="EditEstimate__error" role='alert'>
            {error && <p>{error.message}</p>}
            </div>
            <div className="EditEstimate_Name">
                <label>
                    Estimate Name:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditEstimatePage_form"
                    type="text" 
                    name="estimate_name"
                    id="estimate_name"
                    placeholder="Estimate"
                    required
                    value={name}
                    onChange={this.handleChangeName} 
                />
            </div>
            <div className="EditEstimate_projectSelect">
                <label>
                    Select Project:
                    {' '}
                    <Required />
                </label>
                <select 
                    className="EditEstimatePage_form"
                    name="project_id"
                    id="project_id"
                    required
                    onChange={this.handleChangeProject_id} 
                >
                {this.parseProjects()}
                </select>
            </div>
            <div className="EditEstimate_contractorName">
                <label>
                    Contractor Name:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditEstimatePage_form"
                    type="text" 
                    name="estimate_contractor_name"
                    id="estimate_contractor_name"
                    placeholder="Contractor"
                    required
                    value={contractor_name}
                    onChange={this.handleChangeContractor_name} 
                />
            </div>
            <div className="EditEstimate_contractorName">
                <label>
                    Contractor Name:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditEstimatePage_form"
                    type="text" 
                    name="estimate_contractor_name"
                    id="estimate_contractor_name"
                    placeholder="Contractor"
                    required
                    value={name}
                    onChange={this.handleChangeContractor_name} 
                />
            </div>
            <div className="EditEstimate_price">
                <label>
                    Price:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditEstimatePage_form"
                    type="text" 
                    name="estimate_price"
                    id="estimate_price"
                    placeholder="Price"
                    required
                    value={price}
                    onChange={this.handleChangePrice} 
                />
            </div>
            <div className="EditEstimate_details">
                <label>
                    Details:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditEstimatePage_form"
                    type="text" 
                    name="estimate_details"
                    id="estimate_details"
                    placeholder="Details"
                    required
                    value={details}
                    onChange={this.handleChangeDetails} 
                />
            </div>
            <div className="EditEstimate_total_time">
                <label>
                    Time:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditEstimatePage_form"
                    type="text" 
                    name="estimate_total_time"
                    id="estimate_total_time"
                    placeholder="Time"
                    required
                    value={total_time}
                    onChange={this.handleChangeTotal_time} 
                />
            </div>
            <div className="EditEstimate_buttons">
            <button className="EditEstimate_commandsCancel" type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            <button className="EditEstimate_commands" type='submit'>
              Save
            </button>
          </div>
        </form>
        </div>
    );
  };
};

export default EditEstimate;
