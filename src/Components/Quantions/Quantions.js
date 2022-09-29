import React from 'react';
import './Quantions.css'
const Quantions = (props) => {
    return (
        <div className='sigle-qna'>
            <h2>{props.quantion}</h2>
            <p>{props.ans}</p>
        </div>
    );
};

export default Quantions;