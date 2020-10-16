import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import ViewCurrentProjects from './ViewCurrentProjects/ViewCurrentProjects';
import ViewNotStartedProjects from './ViewNotStartedProjects/ViewNotStartedProjects';
import ViewInProgressProjects from './ViewInProgressProjects/ViewInProgressProjects';
import ViewCompletedProjects from './ViewCompletedProjects/ViewCompletedProjects';
import ViewProject from './ViewProject/ViewProject';
import AddEstimate from './AddEstimate/AddEstimate';
import AddProject from './AddProject/AddProject';
import EditProject from './EditProject/EditProject';
import ViewProjectEstimates from './ViewProjectEstimates/ViewProjectEstimates';
import EditEstimate from './EditEstimate/EditEstimate';
import ViewEstimate from './ViewEstimate/ViewEstimate';
import MyHomeRenoContext from '../src/MyHomeRenoContext';
import config from '../src/config';


class App extends Component {
  state = {
    estimates: [],
    projects: [],
    newProject: {
      name: {
        hasError: false,
        touched: false,
        value: ''
      },
      summary: {
        hasError: false,
        touched: false,
        value: ''
      },
      estimated_cost: {
        hasError: false,
        touched: false,
        value: ''
      },
      room: {
        hasError: false,
        touched: false,
        value: ''
      },
      details: {
        hasError: false,
        touched: false,
        value: ''
      },
      total_time: {
        hasError: false,
        touched: false,
        value: ''
      },
      type: {
        hasError: false,
        touched: false,
        value: ''
      },
      status: {
        hasError: false,
        touched: false,
        value: ''
      },
    },
    newEstimate: {
      name: {
        hasError: false,
        touched: false,
        value: ''
      },
      contractor_name: {
        hasError: false,
        touched: false,
        value: ''
      },
      price: {
        hasError: false,
        touched: false,
        value: ''
      },
      details: {
        hasError: false,
        touched: false,
        value: ''
      },
      total_time: {
        hasError: false,
        touched: false,
        value: ''
      },
      project_id: {
        hasError: false,
        touched: false,
        value: ''
      }
    },
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/estimates`), 
      fetch(`${config.API_ENDPOINT}/api/projects`), 
    ])
      .then(([estimatesRes, projectsRes]) => {
        if (!estimatesRes.ok) return estimatesRes.json().then(e => Promise.reject(e));
        if (!projectsRes.ok) return projectsRes.json().then(e => Promise.reject(e));

        return Promise.all([estimatesRes.json(), projectsRes.json()]);
      })
      .then(([estimates, projects]) => {
        this.setState({ estimates, projects });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  updateNewProjectData = (input, value) => {
    this.setState({
      newProject: {
          ...this.state.newProject,
        [input]: {
          hasError: false,
          touched: true,
          value: value,
        },
      },
    });
  }

  updateNewEstimateData = (input, value) => {
    this.setState({
      newEstimate: {
          ...this.state.newEstimate,
        [input]: {
          hasError: false,
          touched: true,
          value: value,
        },
      },
    });
  }

  handleAddProject = newProject => {
    this.setState({
      projects: [...this.state.projects, newProject],
    });
  }

  handleAddEstimate = newEstimate => {
    this.setState({
      estimates: [...this.state.estimates, newEstimate],
    });
  }

  handleDeleteProject = projectId => {
    this.setState({
      projects: this.state.projects.filter(project => project.id !== projectId),
    });
  }

  handleDeleteEstimate = estimateId => {
    this.setState({
      estimates: this.state.estimates.filter(estimate => estimate.id !== estimateId),
    });
  }

  updateProject = updatedProject => {
    this.setState({
      projects: this.state.projects.map(project =>
        (project.id !== updatedProject.id) ? project : updatedProject
      )
    });
  }

  updateEstimate = updatedEstimate => {
    this.setState({
      estimates: this.state.estimates.map(estimate =>
        (estimate.id !== updatedEstimate.id) ? estimate : updatedEstimate
      )
    });
  }


  render() {  
    const value = {
      estimates: this.state.estimates,
      projects: this.state.projects,
      newEstimate: this.state.newEstimate,
      newProject: this.state.newProject,
      deleteEstimate: this.handleDeleteEstimate,
      deleteProject: this.handleDeleteProject,
      addEstimate: this.handleAddEstimate,
      addProject: this.handleAddProject,
      updateNewEstimateData: this.updateNewEstimateData,
      updateNewProjectData: this.updateNewProjectData,
      updateEstimate: this.updateEstimate,
      updateProject: this.updateProject,
    }

  return (
    <MyHomeRenoContext.Provider value={value}>
      <main className='App'>
        <NavBar />
        <h1 className="AppHeader">MyHomeReno</h1>
        <Route exact path="/" component={LandingPage} />
        <Route path="/view-current-project-list" component={ViewCurrentProjects} />
        <Route path="/view-not-started-project-list" component={ViewNotStartedProjects} />
        <Route path="/view-in-progress-project-list" component={ViewInProgressProjects} />
        <Route path="/view-completed-project-list" component={ViewCompletedProjects} />
        <Route path="/view-project-page/:projectId" component={ViewProject} />
        <Route path="/add-project" component={AddProject} />
        <Route path="/edit-project/:projectId" component={EditProject} />
        <Route path="/add-estimate/:projectId" component={AddEstimate} />
        <Route path="/edit-estimate/:estimateId" component={EditEstimate} />
        <Route path="/view-project-estimates/:projectId" component={ViewProjectEstimates} />
        <Route path="/view-estimate-page/:estimateId" component={ViewEstimate} />
      </main>
    </MyHomeRenoContext.Provider>
  )};
};

export default App;