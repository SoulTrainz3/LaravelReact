import React, {Component} from 'react';
import './Backdrop.css';
import Loader from '../UI/Loader/Loader';

const backdrop = props => {
        toRender = <div>
            <div className='Wrapper'>
                {this.props.entries.map((entrie, key) => (
                    <div key={key} className='IndividualBackdrop'>
                        {entrie.hobby}
                    </div>
                ))}
            </div>
        </div>;
    return toRender;
}

export default backdrop;