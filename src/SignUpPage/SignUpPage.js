import React, { Component } from 'react';
import './SignUpPage.css';

class SignUpPage extends Component {
  render() {
    return (
      <div className="SignUpPage">
        <div className="SignUpPage__heading">
          <h1>Sign Up Now!</h1>
        </div>
        <div className="SignUpPage__controls">
        <form class='signup-form'>
        <div>
          <label for="first-name">First name</label>
          <input placeholder='First Name' type="text" name='first-name' id='first-name' />
        </div>
        <div>
          <label for="last-name">Last name</label>
          <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
        </div>
        <div>
          <label for="home-address">Home Address</label>
          <input type="text" name='home-address' id='home-address' />
        </div>
        <div>
          <label for="username">Email</label>
          <input type="text" name='username' id='username' />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name='password' id='password' />
        </div>
            <button type='submit'>Sign Up</button>
            <button>Cancel</button>
        </form>
        </div>
      </div>
    );
  }
}

export default SignUpPage;