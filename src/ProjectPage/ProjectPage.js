import React, { Component } from 'react';
import './ProjectPage.css';
import { Link } from 'react-router-dom';
import MyHomeRenoContext from '../MyHomeRenoContext';
import config from '../config';
import PropTypes from 'prop-types';

class ProjectPage extends Component {
    static defaultProps = {
        name: '',
        summary: '',
        estimated_cost: '',
        room: '',
        details: '',
        total_time: '',
        type: '',
        status: '',
      };

      static contextType = MyHomeRenoContext;
  
    handleClickDelete = e => {
        e.preventDefault()
        const projectId = this.props.id;
    
        fetch(`${config.API_ENDPOINT}/api/projects/${projectId}`, {
            method: 'DELETE',
            headers: {
            'content-type': 'application/json'
            },
        })
            .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e));
            return;
            })
            .then(() => {
            this.context.deleteProject(projectId);
            this.props.delete();
            })
            .catch(error => {
            console.error({ error });
            });
    };

  render() {
      const { id, name, summary, estimated_cost, room, details, total_time, type, status } = this.props;

    return (
        <div className="ProjectPage">
            <div className="projectInfo">
                <ul className="projectInfo_list">
                    <li className="projectPage_name">
                        {name}
                    </li>
                    <li className="projectPage_estimated_cost">
                        {estimated_cost}
                    </li>
                    <li className="projectPage_total_time">
                        {total_time}
                    </li>
                    <li className="projectPage_room">
                        {room}
                    </li>
                    <li className="projectPage_details">
                        {details}
                    </li>
                    <li className="projectPage_type">
                        {type}
                    </li>
                    <li className="projectPage_status">
                        {status}
                    </li>
                    <li className="projectPage_summary">
                        {summary}
                    </li>
                </ul>
            </div>
            <div className="ProjectCommands">
                <Link className="Project_Link" to={`/view-project-estimates/${id}`}>
                    View Estimates
                </Link>
                <Link className="Project_Link" to={`/add-estimate/${id}`}>
                    Add Estimate
                </Link>
                <Link className="Project_Link" to={`/edit-project/${id}`}>
                    Edit Project
                </Link>
                <button
                    className="Course_Delete"
                    type='button'
                    onClick={this.handleClickDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );   
  }
}

ProjectPage.propTypes = {
    id: PropTypes.number,
    onDeleteProject: PropTypes.func,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    estimated_cost: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    total_time: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

export default ProjectPage;

