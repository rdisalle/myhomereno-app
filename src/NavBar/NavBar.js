import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return ( 
      <div className="NavBar">
        <div className="SearchBar_controls">
            <Link className="Nav_Link" to={'/'} >
                Home
            </Link>
            {' '}
            <Link className="Nav_Link" to={'/view-current-project-list'} >
                View Projects
            </Link>
        </div>
      </div>
    );
  };
};

export default NavBar;

