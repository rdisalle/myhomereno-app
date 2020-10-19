import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
    return (
        <main className="LandingPage">
            <h1>Welcome to MyHomeReno</h1>
            <h2 className="GetStarted">To Get Started: </h2>
            <ul className="Landing_list">
              <li className="LandingList_item">1. Keep track of your projects and project estimates all in one place</li>
              <li className="LandingList_item">2. Click "View Projects" below</li>
              <li className="LandingList_item">3. On the view projects page, press "Add Project" and fill in the information.</li>
              <li className="LandingList_item">4. Once you have a project added, you will have the ability to add estimates to the project.</li>
              <li className="LandingList_item">5. To add an estimate, press "Add Estimate" and fill out the information.</li>
              <li className="LandingList_item">6. Once done, you will be able to view that estimate under the estimate selected.</li>
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