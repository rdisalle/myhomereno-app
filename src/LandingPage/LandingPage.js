import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
        <main className="LandingPage">
            <h1>Welcome to MyHomeReno</h1>
            <h2>To Get Started: </h2>
            <ul className="Landing_list">
              <li className="LandingList_item">Simply click "View Projects" below</li>
              <li className="LandingList_item">From there you will navigate to a project list page. On this page, press "Add Project" and fill in the information.</li>
              <li className="LandingList_item">Once you have a project added, you will have the ability to add estimates to the project.</li>
              <li className="LandingList_item">To add an estimate, press "Add Estimate" and fill out the information.</li>
              <li className="LandingList_item">Once done, you will be able to view that estimate under the estimate selected.</li>
              <li className="LandingList_item">MyHomeReno will allow you to you view all of your projects in one convient place.</li>
              <li className="LandingList_item">Within projects, you can store and compare estimates and choose the best one for you.</li>
            </ul>
            <div>
              <Link className="Landing_Link" to={'/view-current-project-list'} >
                View Projects
              </Link>
            </div>
         </main>
    );
  };
};

export default LandingPage;