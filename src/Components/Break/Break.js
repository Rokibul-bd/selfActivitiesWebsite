import React from 'react';
import './Break.css'
const Break = ({ hundleBreakTimeBtn, activiti }) => {
    const { time } = activiti
    return (
        <button onClick={() => hundleBreakTimeBtn(activiti)} className='time-btn'>{time}</button>
    );
};

export default Break;