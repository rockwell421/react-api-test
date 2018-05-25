import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import axios from './axios';

class App extends Component {

  render() {

    return (
      <div className="App">
        <h1>Forgot Your Password?</h1>
        <p>Please enter the email address registered to your account</p>
        <Form />
      </div>
    );
  }
}

export default App;
