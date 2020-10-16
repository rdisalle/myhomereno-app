import React, { Component } from 'react';
import './ViewCurrentProjects.css';
import ProjectPage from '../ProjectPage/ProjectPage';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MyHomeRenoContext from '../MyHomeRenoContext';
import PropTypes from 'prop-types';

class ViewCurrentProjects extends Component {

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
                <NavLink className="ViewProjectType_link" activeClassName="active" to={'/view-current-project-list'} >
                    All Projects
                </NavLink>
                <NavLink className="ViewProjectType_link" to={'/view-not-started-project-list'}>
                    Not Started
                </NavLink>
                <NavLink className="ViewProjectType_link" to={'/view-in-progress-project-list'}>
                    In Progress
                </NavLink>
                <NavLink className="ViewProjectType_link" to={'/view-completed-project-list'}>
                    Completed
                </NavLink>
            </div>
                <Link className="AddProject_link" to={'/add-project'}>
                    Add New Project
                </Link>
            <h1 className= "ViewCurrentProjects_header">All Projects</h1>
            <ul className="ViewCurrentProjects_list">
                    {projects.map(project =>

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
                        date_created={project.date_created}
                        delete= {this.onDelete}
                    />
                    <div className="ViewProjectList_estimate">
                    <span className="ViewProjectList_num-scores">
                        Project Estimates: {this.countEstimatesForProject(estimates, project.id)}
                    </span>
                    </div>
                    </li>
                )}
            </ul>
        </div>
        );
    };
};

ViewCurrentProjects.propTypes = {
    history: PropTypes.object
  };
  
export default ViewCurrentProjects;
                    
                
