import React from 'react';
import classes from './Button.css';
import { NavLink } from 'react-router-dom'

const Button = (props) => (
    <NavLink to={props.to} className={classes.Button}>{props.text}</NavLink>
);

export default Button;