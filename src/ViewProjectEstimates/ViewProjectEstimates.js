import React, { Component } from 'react';
import './ViewProjectEstimates.css';
import EstimatePage from '../EstimatePage/EstimatePage';
import { Link } from 'react-router-dom';
import MyHomeRenoContext from '../MyHomeRenoContext';
import PropTypes from 'prop-types' ;

class ViewProjectEstimates extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

  static contextType = MyHomeRenoContext;

  onDelete = () => {
    const { projectId } = this.props.match.params;
    this.props.history.push(`/view-project-estimates/${projectId}`);
  };

  getEstimatesForProject = (estimates=[], projectId) => (
    (!projectId)
        ? estimates
        : estimates.filter(estimate => estimate.project_id === JSON.parse(projectId))
  );

  findProject = (projects=[], projectId) =>
  projects.find(project => project.id === JSON.parse(projectId));

  render() {
      const { projectId } = this.props.match.params;
      const { estimates=[] } = this.context;
      const estimatesForProject = this.getEstimatesForProject(estimates, projectId);
      const { projects } = this.context;
      const project = this.findProject(projects, projectId) || { content: '' };
    return (
      <div className="ViewProjectEstimates">
        <Link className="ProjectEstimate_add" to={`/add-estimate/${projectId}`}>
          Add Estimate
        </Link>
        <h2 className="ViewProjectEstimates_name">
          {project.name}
        </h2>
        <ul className="ViewProjectEstimates_list">  
          {estimatesForProject.map(estimate =>
          <li className="ViewProjectEstimates_estimate" key={estimate.id}>
            <Link className="ViewProjectEstimate_viewLink" to={`/view-estimate-page/${estimate.id}`}>
              View 
            </Link>
            <EstimatePage
              id={estimate.id}
              name={estimate.name}
              contractor_name={estimate.contractor_name}
              price={estimate.price}
              details={estimate.details}
              total_time={estimate.total_time}
              date_created={estimate.date_created}
            />
          </li>
          )}
        </ul>
      </div>
    );
  };
}


ViewProjectEstimates.propTypes = {
  match: PropTypes.object
};

export default ViewProjectEstimates;
