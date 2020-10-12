import React, { Component } from 'react';
import './ViewEstimate.css';
import EstimatePage from '../EstimatePage/EstimatePage';
import MyHomeRenoContext from '../MyHomeRenoContext';
import PropTypes from 'prop-types';

class ViewEstimate extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  };

static contextType = MyHomeRenoContext;

onDelete = () => {
    const { estimates } = this.context;
    const { estimateId } = this.props.match.params;
    const estimate= this.findestimate(estimates, estimateId) || { content: '' };
    this.props.history.push(`/view-project-estimates/${estimate.project_id}`);
  }

findEstimate = (estimates=[], estimateId) =>
estimates.find(estimate => estimate.id === JSON.parse(estimateId));

  render() {
    const { estimates } = this.context;
    const { estimateId } = this.props.match.params;
    const estimate = this.findEstimate(estimates, estimateId) || { content: '' };

    return (
      <section className="ViewEstimatePage">
          <EstimatePage
              id={estimate.id}
              name={estimate.name}
              contractor_name={estimate.contractor_name}
              price={estimate.price}
              details={estimate.details}
              total_time={estimate.total_time}
              date_created={estimate.date_created}
              delete={this.onDelete}
          />
      </section>
  );
};
};

EstimatePage.propTypes = {
  match: PropTypes.object
};
  
export default ViewEstimate ;
