import React from 'react';
import './Break.css'
const Break = () => {
    return (
        <div className='break-container'>
            <h4>Add A Break</h4>
            <div className='break-btn-container'>
                <button>30</button>
                <button>50</button>
                <button>70</button>
                <button>90</button>
            </div>
        </div>
    );
};

export default Break;