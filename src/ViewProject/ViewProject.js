import React, { Component } from 'react';
import './ViewProject.css';
import ProjectPage from '../ProjectPage/ProjectPage';

class ViewProject extends Component {
  render() {
    const project = this.props.info
        .map((info, key) => <ProjectPage {...info} key={key} />);
    return (
        <div>
        {project}
        </div>
    );
  }
}

ProjectPage.defaultProps = {
    info: []
  };
  
export default ViewProject;
