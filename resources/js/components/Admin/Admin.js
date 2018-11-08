import React, {Component} from 'react';
import axios from 'axios';
import Cipher from '../Cipher/Cipher';
import classes from './Admin.css';


class Admin extends Component {
    state = {
        isLogged: false,
        entries: [],
        entryKeys: [],
        loading: true,
    }

    handleIsLogged = () => {
        this.setState({
            isLogged: true,
        });

        axios.get('https://react-my-burger-24ee5.firebaseio.com/inputs.json')
          .then(response => {
            if (response.data) {
              this.setState({
                entries: Object.keys(response.data).map(x => response.data[x].text).reverse(),
                loading: false,
              });
            }
          })
          .catch(error => {
              this.setState({
                  loading: false
              })
          })      
    }



    render() {
        let toRender = <Cipher isLogged={this.handleIsLogged} />;

        if(this.state.isLogged) {
            toRender = 
            <div>
                <ul className={classes.entriesContainer}>
                    {this.state.entries.map((entrie, key) => <li key={key}>{entrie}</li>)}
                </ul>
            </div>
        }
        return toRender;
    }
}

export default Admin;