import React, {Component} from 'react';
import './Backdrop.css';
import Loader from '../UI/Loader/Loader';
import Button from '../Button/Button';

const backdrop = props => {
    let toRender = <Loader />
    if(!this.state.loading) {
        toRender = <div>
            <div className='Wrapper'>
                {this.state.entries.map((entrie, key) => (
                    <div key={key} className='IndividualBackdrop'>
                        {entrie}
                    </div>
                ))}
            </div>
        </div>;
    }
    return(
        <div>
            <div className='backButton'>
                <Button to={'/'} text={'Bk'}/>
            </div> 
        {toRender}
        </div>
);
}

export default backdrop;