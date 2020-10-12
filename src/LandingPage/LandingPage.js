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
              <li className="LandingList_item">Simply click "View Courses" below</li>
              <li className="LandingList_item">From there you will navigate to a course list page. On this page, press "Add Course" and fill in the information.</li>
              <li className="LandingList_item">Once you have a course added, you will have the ability to add scores to the course.</li>
              <li className="LandingList_item">To add a score, press "Add Score" and fill out the information.</li>
              <li className="LandingList_item">Once done, you will be able to view that score under the course selected.</li>
              <li className="LandingList_item">GolfScore will allow you to easily submit all courses played and the scores to go with them.</li>
              <li className="LandingList_item">From here you will be able to easily compare your scores.</li>
            </ul>
            <div>
              <Link className="Landing_Link" to={'/view-current-project-list'} >
                View Projects
              </Link>
              <Link className="Landing_Link_SignUp" to={'/sign-up-page'} >
                Sign Up
              </Link>
              <Link className="Landing_Link_Login" to={'/login-page'} >
                Login
              </Link>
            </div>
         </main>
    );
  };
};

export default LandingPage;