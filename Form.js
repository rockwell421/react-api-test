import React, {Component} from 'react';
import Button from './Button';
import axios from './axios';
import './App.css';
import Spinner from './Spinner';

class Form extends Component {
  state = {
    loading: false,
    msg: ""
  }

//API
  getUserInfo = (e) => {
    this.setState({loading: true})
    e.preventDefault();
    const userInfo = {
      loginId: this.refs.userInput.value
    }
    axios.post('forgot-password', userInfo)
      .then(response => {
        this.setState({loading: false, msg: response.data.message})
      })
      .catch(error => {
        this.setState({loading: false, msg: error.message})
      });
  }

  onSubmit = (e) => {
    this.setState({loading: false})
  }

  // _handleClick = (e) => {
  //   this.refs.userInput.value === "";
  // }

  _answerRender = () => {
       return(
           <div>
               <p className="gray-text">{this.state.msg}</p>
           </div>
       )
   }

  render() {
    return (
      <div>
        <div className="field">
          <p style={{marginTop: '2rem'}}>Email Address: </p>
          <form onSubmit={this.onSubmit.bind(this)} className="Form">
            <input type="text" ref="userInput" />
          </form>
        </div>
          <Button clicked={this.getUserInfo.bind(this)} />
          <div>
            {this.state.loading ? <Spinner /> : this._answerRender() }
          </div>
      </div>
    );
  }
}

export default Form;
