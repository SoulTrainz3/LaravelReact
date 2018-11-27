import React, {Component} from 'react';
import './Backdrop.css';

const backdrop = props => {
    const toRender = <div>
            <div className='altaclasa'>
                {props.entries.map((entrie, key) => (
                    <div key={key} className='IndividualBackdrop'>
                        {entrie.hobby}
                    </div>
                ))}
            </div>
        </div>;
    return toRender;
}

export default backdrop;