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

    // {this.state.loading ? <Spinner /> : <p>{this.state.msg}</p> }
  onSubmit = (e) => {
    this.setState({loading: false})
  }

  _answerRender = () => {
       return(
           <div>
               <p>{this.state.msg}</p>
           </div>
       )
   }

  render() {

    // let loader =
    // if(this.state.loading) {
    //   return (
    //     <p>this.state.message</p>
    //   )
    // } else {
    //   return (
    //     <Spinner />
    //   )
    // }

    return (
      <div>
        <p>Email Address: </p>
        <form onSubmit={this.onSubmit.bind(this)} className="Form">
          <input type="text" ref="userInput" />
          <Button clicked={this.getUserInfo.bind(this)} />
          <div>
            {!this.state.loading ? this._answerRender() : <Spinner />}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
