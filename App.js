import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import axios from './axios';
import Background from './Splash/Background';

class App extends Component {

  render() {

    return (
      <div className="App">
      <h1>Forgot Your Password?</h1>
      <p className="gray-text">Please enter the email address registered to your account</p>
        <Form />
        
        <Background />
      </div>
    );
  }
}

export default App;
