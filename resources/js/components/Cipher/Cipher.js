import React, { Component } from "react";
import classes from './Cipher.css';

class Cipher extends Component {
  constructor() {
    super();
    this.state = {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0,
      zero: 0
    };
  }

  handleClick = id => {
    // const { one, two, three } = this.state;
    switch (id) {
      case 1: {
        this.setState(nextProps => {
          return {
            one: nextProps.one + 1
          };
        });
        break;
      }
      case 2: {
        this.setState(nextProps => {
          return {
            two: nextProps.two + 1
          };
        });
        break;
      }
      case 3: {
        this.setState(nextProps => {
          return {
            three: nextProps.three + 1
          };
        });
        break;
      }
      case 4: {
        this.setState(nextProps => {
          return {
            four: nextProps.four + 1
          };
        });
        break;
      }
      case 5: {
        this.setState(nextProps => {
          return {
            five: nextProps.five + 1
          };
        });
        break;
      }
      case 6: {
        this.setState(nextProps => {
          return {
            six: nextProps.six + 1
          };
        });
        break;
      }
      case 7: {
        this.setState(nextProps => {
          return {
            seven: nextProps.seven + 1
          };
        });
        break;
      }
      case 8: {
        this.setState(nextProps => {
          return {
            eight: nextProps.eight + 1
          };
        });
        break;
      }
      case 9: {
        this.setState(nextProps => {
          return {
            nine: nextProps.nine + 1
          };
        });
        break;
      }
      case 0: {
        this.setState(nextProps => {
          return {
            zero: nextProps.zero + 1
          };
        });
        break;
      }
      default:
        break;
    }
  };

  handleCheck = () => {
    if(this.state.zero === 0 &&
      this.state.one === 0 &&
      this.state.two === 1 &&
      this.state.three === 0 &&
      this.state.four === 0 &&
      this.state.five === 0 &&
      this.state.six === 1 &&
      this.state.seven === 0 &&
      this.state.eight === 0 &&
      this.state.nine === 2) {
        this.props.isLogged();
      }
  }
  

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.cipher}>
          <button className={classes.button} onClick={() => this.handleClick(1)}>
            1
          </button>
          <button className={classes.button} onClick={() => this.handleClick(2)}>
            2
          </button>
          <button className={classes.button} onClick={() => this.handleClick(3)}>
            3
          </button>
          <br />
          <button className={classes.button} onClick={() => this.handleClick(4)}>
            4
          </button>
          <button className={classes.button} onClick={() => this.handleClick(5)}>
            5
          </button>
          <button className={classes.button} onClick={() => this.handleClick(6)}>
            6
          </button>
          <br />
          <button className={classes.button} onClick={() => this.handleClick(7)}>
            7
          </button>
          <button className={classes.button} onClick={() => this.handleClick(8)}>
            8
          </button>
          <button className={classes.button} onClick={() => this.handleClick(9)}>
            9
          </button>
          <br />
          <button className={classes.button} onClick={() => this.handleClick(0)}>
            #
          </button>
          <button className={classes.button} onClick={() => this.handleClick(0)}>
            0
          </button>
          <button className={classes.button} onClick={() => this.handleCheck()}>
            *
          </button>
        </div>
      </div>
    );
  }
}


export default Cipher