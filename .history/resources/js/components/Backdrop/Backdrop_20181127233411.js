import React, {Component} from 'react';
import './Backdrop.css';

const backdrop = props => {
    const toRender = <div>
            <div className='Wrapper'>
                {props.entries.reverse().map((entrie, key) => {
                    if(entries )
                    return (
                    <div key={key} className='IndividualBackdrop'>
                        {entrie.hobby}
                    </div>
                    )}
                )}}
            </div>
        </div>;
    return toRender;
}

export default backdrop;