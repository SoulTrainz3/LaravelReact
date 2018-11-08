import React from 'react';
import classes from './Input.css';

const input = props => (
    <div className={classes.Wrapper}>
        <div className={classes.Title}>
            <p>What's your hobby?</p>
        </div>
        <div className={classes.Container}>
            <form onSubmit={props.submitHandler}>
                <input className={classes.Input} onChange={props.inputChangeHandler} value={props.input}></input>
            </form>
        </div>
        <div className={classes.UnderInput}>
            {props.containsProfanity ? <p>Please be polite.</p> : <p>Submit to see what others entered!</p>}
        </div>
    </div>
);

export default input;
