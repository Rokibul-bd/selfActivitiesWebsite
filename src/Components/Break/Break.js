import React from 'react';
import './Break.css'
const Break = (props) => {
    const { time } = props.activiti
    return (
        <button className='time-btn'>{time}</button>
    );
};

export default Break;