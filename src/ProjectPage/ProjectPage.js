import React, { Component } from 'react';
import './ProjectPage.css';
import { Link } from 'react-router-dom';

class ProjectPage extends Component {
  render() {

    return (
        <div className="ProjectPage">
            <Link to={`/view-project-page/${this.props.name}`}> 
                {this.props.name}
            </Link>
            <div className="ProjectInfo">
                <div className="ProjectPage_summary">{this.props.summary}</div>
                <div className="ProjectPage_cost">{this.props.cost}</div>
                <div className="ProjectPage_room">{this.props.room}</div>
                <div className="ProjectPage_details">{this.props.details}</div>
                <div className="ProjectPage_time">{this.props.time}</div>
                <div className="ProjectPage_type">{this.props.type}</div>
                <div className="ProjectPage_status">{this.props.status}</div>
            </div>
        </div>
    );   
  }
}

export default ProjectPage;

