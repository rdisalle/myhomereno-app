import React, { Component } from 'react';
import './ViewCurrentProjects.css';
import ProjectPage from '../ProjectPage/ProjectPage';

class ViewCurrentProjects extends Component {
  render() {
    const list = this.props.info
        .map((info, key) => <ProjectPage{...info} key={key} />);
    return (
      <div className="ViewCurrentProjects">
        {list}
      </div>
    );
  }
}

export default ViewCurrentProjects;