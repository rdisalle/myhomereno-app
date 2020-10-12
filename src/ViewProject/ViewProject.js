import React, { Component } from 'react';
import './ViewProject.css';
import ProjectPage from '../ProjectPage/ProjectPage';
import MyHomeRenoContext from '../MyHomeRenoContext';
import PropTypes from 'prop-types';

class ViewProject extends Component {
    static defaultProps = {
        match: {
          params: {}
        }
      };
    
    static contextType = MyHomeRenoContext;

    onDelete = () => {
        this.props.history.push('/view-current-project-list');
      };

    findProject = (projects=[], projectId) =>
    projects.find(project => project.id === JSON.parse(projectId));

    render() {
        const { projects } = this.context;
        const { projectId } = this.props.match.params;
        const project = this.findProject(projects, projectId) || { content: '' };

        return (
            <section className="ProjectItem">
                  <ProjectPage
                    id={project.id}
                    name={project.name}
                    summary= {project.summary}
                    estimated_cost= {project.estimated_cost}
                    room= {project.room}
                    details= {project.details}
                    total_time= {project.total_time}
                    status= {project.status}
                    type= {project.type}
                    delete= {this.onDelete}
                  />
            </section>
          );
        };
      };
      
      ViewProject.propTypes = {
        match: PropTypes.object
      };
  
export default ViewProject;
