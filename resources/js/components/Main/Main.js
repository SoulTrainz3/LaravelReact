import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Input/Input';
import Backdrop from '../Backdrop/Backdrop';
import Loader from '../UI/Loader/Loader';
import Button from '../Button/Button';
import classes from './Main.css';
import Profanity from './profanityDB';
import { NavLink } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      entries: [],
      entryKeys: null,
      added: false,
      loading: false,
    };

    this.adminHandler=this.adminHandler.bind(this);
  }
  

  componentDidMount() {
    console.log(this.props);
  }

  inputChangeHandler = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    
    if (Profanity.includes(this.state.input)) {
      this.setState({
        containsProfanity: true,
        input: ""
      });
    } else {
      this.setState({
        loading: true,
      })
      const post = {
        text: this.state.input,
      }
      axios.post('https://react-my-burger-24ee5.firebaseio.com/inputs.json', post)
      .then(response => {
        this.setState({
          containsProfanity: false,
          entries: [this.state.input, ...this.state.entries],
          input: '',
          added: true,
          loading: false,
        })
      })
      .catch(error => {
        this.setState({
          loading: false,
        })
      })
      
    }
  }

  adminHandler = (event) => {
    event.preventDefault();
    console.log('Hallo');
    this.props.history.push('/admin');
  }

  render() {
    let toRender = <Input containsProfanity={this.state.containsProfanity} 
    inputChangeHandler={this.inputChangeHandler} 
    submitHandler={this.submitHandler} 
    input={this.state.input} />

    let buttons =  <div className={classes.Button}>
                      <Button to={'/admin'} text={'Ad'}/>
                      <Button to={'/results'} text={'Re'}/>
                      <Button to={'/about'} text={'Ab'}/>
                    </div>
    
    if(this.state.added || this.state.loading) {
      buttons = null;
    }

     return (
      <div>
        {buttons}
        {this.state.loading ? <Loader /> : null}
        {!this.state.added ? toRender : null}
        {this.state.added ? <Backdrop/> : null}
      </div>
    );
  }
}

export default Main;
