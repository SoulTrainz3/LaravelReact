import React, {Component} from 'react';
import classes from './Backdrop.css';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';

class backdrop extends Component {
    state = {
        entries: [],
        entryKeys: [],
        loading: true,
    }

    componentWillMount() {
        this.getEntriesHandler();
    }

    getEntriesHandler = () => {
        axios.get('https://react-my-burger-24ee5.firebaseio.com/inputs.json')
          .then(response => {
            if (response.data) {
              this.setState({
                entryKeys: Object.keys(response.data),
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
    let toRender = <Loader />
    if(!this.state.loading) {
toRender = <div>
            <div className={classes.Wrapper}>
                {this.state.entries.map((entrie, key) => (
                    <div key={key} className={classes.IndividualBackdrop}>
                        {entrie}
                    </div>
                ))}
            </div>
        </div>;
    }
    return toRender;
    }
}

export default backdrop;