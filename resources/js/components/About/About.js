import React from 'react';
import classes from './About.css';
import Button from '../Button/Button';

const About = () => (
    <div>
        <div className={classes.backButton}>
            <Button to={'/'} text={'Bk'}/>
        </div>
            <div className={classes.about}>
                <h3>We are a small group of people that try to get 
                    others together by doing what they like.</h3>
            </div>
    </div>
    
);

export default About;
