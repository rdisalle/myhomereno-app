import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return ( 
      <div className="NavBar">
        <div className="SearchBar__controls">
            <Link className="Landing_Link" to={'/view-current-project-list'} >
                View Projects
            </Link>
        </div>
      </div>
    );
  };
};

export default NavBar;

