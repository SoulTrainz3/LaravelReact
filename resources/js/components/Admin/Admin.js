import React, {Component} from 'react';
import axios from 'axios';
import Cipher from '../Cipher/Cipher';
import classes from './Admin.css';
import Button from '../Button/Button';


class Admin extends Component {
    state = {
        isLogged: false,
        entries: [],
        entryKeys: [],
        loading: true,
    }

    //If user is logged, get all the entries from the DB
    
    handleIsLogged = () => {
        this.setState({
            isLogged: true,
        });

        axios.get('https://react-my-burger-24ee5.firebaseio.com/inputs.json')
          .then(response => {
            if (response.data) {
              this.setState({
                entries: response.data,
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

    handleDelete = (entrie) => {
        console.log('Entrie ID', entrie);
        axios.post(`https://react-my-burger-24ee5.firebaseio.com/inputs.json/${entrie}.json`)
        .then(response => {
            console.log('Delete response', response);
        })
        .catch(error => {
            console.log('Delete error', error);
        })
    }

    render() {
        let toRender = <Cipher isLogged={this.handleIsLogged} />;

        if(this.state.isLogged) {
            toRender = 
            <div>
                <ul className={classes.entriesContainer}>
                    {Object.keys(this.state.entries).map((entrie) => 
                    <li 
                    onClick={() => this.handleDelete(entrie)}
                    key={entrie}>
                    {this.state.entries[entrie].text}
                    </li>)}
                </ul>
            </div>
        }
        return (
            <div>
                <div className={classes.backButton}>
                    <Button to={'/'} text={'Bk'}/>
                </div> 
            {toRender}
            </div>
        );
    }
}
// Object.keys(response.data).map(x => response.data[x].text).reverse().sort()
// this.state.entries[entrie].text
export default Admin;