import React, { Component } from 'react';
import './ViewNotStartedProjects.css';
import ProjectPage from '../ProjectPage/ProjectPage';
import { Link } from 'react-router-dom';
import MyHomeRenoContext from '../MyHomeRenoContext';
import PropTypes from 'prop-types';

class ViewNotStartedProjects extends Component {

    static contextType = MyHomeRenoContext;

    countEstimatesForProject = (estimates=[], projectId) =>
    estimates.filter(estimate => estimate.project_id === projectId).length;

    onDelete = () => {
        this.props.history.push('/view-current-project-list');
      };

    render() {
        const { projects=[], estimates=[] } = this.context;

        return (
        <div className="ViewCurrentProjects">
            <div className="ViewProjects_select">
                <Link className="ViewProjectType_link" to={'/view-current-project-list'} >
                    All Projects
                </Link>
                <Link className="ViewProjectType_link" to={'/view-not-started-project-list'}>
                    Not Started
                </Link>
                {' '}
                <Link className="ViewProjectType_link" to={'/view-in-progress-project-list'}>
                    In Progress
                </Link>
                {' '}
                <Link className="ViewProjectType_link" to={'/view-completed-project-list'}>
                    Completed
                </Link>
            </div>
                <Link className="AddProject_link" to={'/add-project'}>
                    Add Project
                </Link>
            <ul className="ViewCurrentProjects_list">
                    {projects.filter(project => project.status === 'Not Started').map(project => (

                    <li className="ViewCurrentProjects_project" key={project.id}> 
                    <Link
                        className="ViewCurrentProjects_project-link"
                        to={`/view-project-page/${project.id}`}
                    >
                        {project.name}
                    </Link>
                    <ProjectPage className="ProjectList_data"
                        id={project.id}
                        summary={project.summary}
                        estimated_cost={project.estimated_cost}
                        room={project.room}
                        details={project.details}
                        total_time={project.total_time}
                        type={project.type}
                        status={project.status}
                        delete= {this.onDelete}
                    />
                    <div className="ViewProjectList_estimate">
                    <span className="ViewProjectList_num-scores">
                        Estimates: ({this.countEstimatesForProject(estimates, project.id)});
                    </span>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
        );
    };
};

ViewNotStartedProjects.propTypes = {
    history: PropTypes.object
  };
  
export default ViewNotStartedProjects;
                    
                
