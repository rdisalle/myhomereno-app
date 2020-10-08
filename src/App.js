import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import SignUpPage from './SignUpPage/SignUpPage';
import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import ViewCurrentProjects from './ViewCurrentProjects/ViewCurrentProjects';
import ViewProject from './ViewProject/ViewProject';


class App extends Component {
  render() {
  return (
    <main className='App'>
      <NavBar />
      <Route exact path="/" component={LandingPage} />
      <Route path="/sign-up-page" component={SignUpPage} />
      <Route path="/view-current-project-list" render={() => <ViewCurrentProjects info={this.props.info} />} />
      <Route path="/view-project-page" render={() => <ViewProject info={this.props.info} />} />
    </main>
  )}	;
};

export default App;