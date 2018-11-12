import React from 'react';
import classes from './Loader.css';

const loader = () => (
    <div className={classes.loaderWrapper}>
        <div className={classes.loader}></div>
    </div>
);

export default loader;