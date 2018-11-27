import React, {Component} from 'react';
import classes from './Backdrop.css';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';
import Button from '../Button/Button';

const backdrop = props => {
      
return()
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

export default backdrop;