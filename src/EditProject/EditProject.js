import React, { Component } from 'react';
import './EditProject.css';
import MyHomeRenoContext from '../MyHomeRenoContext';
import PropTypes from 'prop-types';
import config from '../config';

const Required = () => (
  <span className="EditProjectr_required">*</span>
)

class EditProject extends Component {
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
        status: '',
        room: '',
        summary: '',
        type: '',
        estimated_cost: '',
        total_time: '',
        details: '',
        date_created: '',
    };

    componentDidMount() {
      const { projectId } = this.props.match.params;
      fetch(`${config.API_ENDPOINT}/api/projects/${projectId}`, {
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
              status: responseData.status_id,
              room: responseData.room,
              summary: responseData.summary,
              type: responseData.type,
              estimated_cost: responseData.estimated_cost,
              total_time: responseData.total_time,
              details: responseData.details,
              date_created: responseData.date_created
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

  handleChangeStatus = e => {
      this.setState({ status: e.target.value});
  };

  handleChangeRoom = e => {
      this.setState({ room: e.target.value});
  };

  handleChangeSummary = e => {
      this.setState({ summary: e.target.value});
  };

  handleChangeDetails = e => {
      this.setState({ details: e.target.value});
  };

  handleChangeTotal_time = e => {
      this.setState({ total_time: e.target.value});
  };

  handleChangeType = e => {
    this.setState({ total_time: e.target.value});
  };

  handleChangeEstimated_cost = e => {
    this.setState({ estimated_cost: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault()
    const { projectId } = this.props.match.params;
    const { id, name, status, room, summary, type, estimated_cost, total_time, details, date_created } = this.state;
    const newProject = { id, name, status, room, summary, type, estimated_cost, total_time, details, date_created };
    fetch(`${config.API_ENDPOINT}/api/projects/${projectId}`, {
      method: 'PATCH',
      body: JSON.stringify(newProject),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        if (!res.ok);
          return res.json().then(error => Promise.reject(error));
      })
      .then(() => {
        this.resetFields(newProject);
        this.context.updateProject(newProject);
        this.props.history.push(`/view-project-page/${projectId}`);
      })
      .catch(error => {
        console.error(error);
        this.setState({ error });
      })
  }

  resetFields = (newFields) => {
    this.setState({
      id: newFields.id || '',
      name: newFields.name || '',
      status: newFields.status || '',
      room: newFields.room || '',
      summary: newFields.summary || '',
      type: newFields.type || '',
      estimated_cost: newFields.estimated_cost || '',
      total_time: newFields.total_time || '',
      details: newFields.details || ''
    });
  };

  handleClickCancel = () => {
    const { projectId } = this.props.match.params;
    this.props.history.push(`/view-project-page/${projectId}`);
  };

  render() {
    const { error, name, status, room, summary, type, estimated_cost, total_time, details  } = this.state;
    return (
      <div className="EditProjet">
        <div className="EditProject_heading">
          <h1>Edit Project!</h1>
        </div>
        <form 
            className="EditProject_form"
            onSubmit={this.handleSubmit}
        >
            <div className="EditProject__error" role='alert'>
            {error && <p>{error.message}</p>}
            </div>
            <div className="EditProject_Name">
                <label>
                    Project Name:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditProjectPage_form"
                    type="text" 
                    name="project_name"
                    id="project_name"
                    placeholder="Project"
                    required
                    value={name}
                    onChange={this.handleChangeName} 
                />
            </div>
            <div className="EditProject_selectStatus">
                <label>
                    Select Status:
                    {' '}
                    <Required />
                </label>
                <select 
                    className="EditProjectPage_form"
                    name="status"
                    id="status"
                    required
                    value={status}
                    onChange={this.handleChangeStatus} 
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
            <div className="EditProject_room">
                <label>
                    Room:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditProjectPage_form"
                    type="text" 
                    name="project_room"
                    id="project_room"
                    placeholder="Bathroom"
                    required
                    value={room}
                    onChange={this.handleChangeRoom} 
                />
            </div>
            <div className="EditProject_summary">
                <label>
                    Summary:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditProjectPage_form"
                    type="text" 
                    name="project_summary"
                    id="project_summary"
                    placeholder="My new project"
                    required
                    value={summary}
                    onChange={this.handleChangeSummary} 
                />
            </div>
            <div className="EditProject_selectType">
                <label>
                    Select Type:
                    {' '}
                    <Required />
                </label>
                <select 
                    className="EditProjectPage_form"
                    name="type"
                    id="type"
                    required
                    value={type}
                    onChange={this.handleChangeType} 
                >
                <option>
                {'DIY'}
                </option>
                <option>
                {'Contractor'}
                </option>
                </select>
            </div>
            <div className="EditProject_estimated_cost">
                <label>
                    Cost:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditProjectPage_form"
                    type="text" 
                    name="estimated_cost"
                    id="estimated_cost"
                    placeholder="Cost"
                    required
                    value={estimated_cost}
                    onChange={this.handleChangeEstimated_cost} 
                />
            </div>
            <div className="EditProject_details">
                <label>
                    Details:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditProjectPage_form"
                    type="text" 
                    name="details"
                    id="details"
                    placeholder="Details"
                    required
                    value={details}
                    onChange={this.handleChangeDetails} 
                />
            </div>
            <div className="EditProject_total_time">
                <label>
                    Time:
                    {' '}
                    <Required />
                </label>
                <input 
                    className="EditProjectPage_form"
                    type="text" 
                    name="total_time"
                    id="total_time"
                    placeholder="Time"
                    required
                    value={total_time}
                    onChange={this.handleChangeTotal_time} 
                />
            </div>
            <div className="EditProject_buttons">
            <button className="EditProject_commandsCancel" type='button' onClick={this.handleClickCancel}>
              Cancel
            </button>
            <button className="EditProject_commands" type='submit'>
              Save
            </button>
          </div>
        </form>
        </div>
    );
  };
};

export default EditProject;
