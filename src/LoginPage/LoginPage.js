import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <div className="LoginPage_heading">
          <h1>Login!</h1>
        </div>
        <div className="LoginPage_controls">
        <form className="LoginPage_form">
        <div>
          <label for="username">Email</label>
          <input type="text" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
            <button type='submit'>Login</button>
            <button>Cancel</button>
        </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;