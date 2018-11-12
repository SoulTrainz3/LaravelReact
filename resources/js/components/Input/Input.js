import React from 'react';
import './Input.css';

const input = props => (
    <div className={'Wrapper'}>
        <div className={'Title'}>
            <p>What's your hobby?</p>
        </div>
        <div className={'Container'}>
            <form onSubmit={props.submitHandler}>
                <input className={'Input'} onChange={props.inputChangeHandler} value={props.input}></input>
            </form>
        </div>
        <div className={'UnderInput'}>
            {props.containsProfanity ? <p>Please be polite.</p> : <p>Submit to see what others entered!</p>}
        </div>
    </div>
);

export default input;
