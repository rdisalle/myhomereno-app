import React, { Component } from 'react';
import './EstimatePage.css';
import { Link } from 'react-router-dom';
import MyHomeRenoContext from '../MyHomeRenoContext';
import config from '../config';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

class EstimatePage extends Component {
    static defaultProps = {
        name: '',
        contractor_name: '',
        price: '',
        details: '',
        total_time: '',
      };

    static contextType = MyHomeRenoContext;

    handleClickDelete = e => {
        e.preventDefault()
        const estimateId = this.props.id;
    
        fetch(`${config.API_ENDPOINT}/api/estimates/${estimateId}`, {
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
            this.context.deleteEstimate(estimateId);
          })
          .catch(error => {
            console.error({ error });
          });
      };

  render() {
    const { id, name, contractor_name, price, details, total_time, date_created} = this.props;
    return (
        <div className="EstimatePage">
            <div className="EstimateInfo">
            <ul className="EstimatePage_list">
                <li className="EstimatePage_name">
                {name}
                </li>
                <li className="EstimatePage_info">
                Contractor: {' '} {contractor_name}
                </li>
                <li className="EstimatePage_info">
                Price: {' '} {price}
                </li>
                <li className="EstimatePage_info">
                {details} 
                </li>
                <li className="EstimatePage_info">
                Time Frame: {' '} {total_time}
                </li>
                <li>
                <div className="Estimate_dates">
                <div className="Estimate_dates-created">
                    Created:
                    {' '}
                    <span className="Date">
                    {format(new Date(date_created), "LLLL do yyyy")}
                    </span>
                </div>
                </div>
                </li>
            </ul>
            </div>
            <div className="EstimatePage_command">
             <Link className="EstimatePage_link" to={`/edit-estimate/${id}`}>
                    Edit Estimate
            </Link>
            </div>
            <button
                className="Estimate_Delete"
                type='button'
                onClick={this.handleClickDelete}
            > 
            Delete
            </button>
      </div>
    );   
  };
};

EstimatePage.propTypes = {
    id: PropTypes.number,
    onDeleteNote: PropTypes.func,
    name: PropTypes.string.isRequired,
    contractor_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    total_time: PropTypes.string.isRequired,
  };

export default EstimatePage;

