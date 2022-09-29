import React from 'react';
import './Break.css'
const Break = ({ hundleBreakTimeBtn, activiti }) => {
    const { time } = activiti
    return (
        <div>
            <button onClick={() => hundleBreakTimeBtn(activiti)} className='time-btn'>{time}</button>
        </div>
    );
};

export default Break;