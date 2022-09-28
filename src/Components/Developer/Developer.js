import React from 'react';
import './Developer.css'
import DevPhoto from './developer.jpg'
const Developer = () => {
    return (
        <div className='developer-container'>
            <div className='developer-top'>
                <div>
                    <img src={DevPhoto} alt="" />
                </div>
                <div>
                    <h4>Md Rokibul Islam</h4>
                    <address>Thakurgaon</address>
                </div>
            </div>
            <h4>Md Rokibul Islam</h4>
            <h5>React Developer</h5>
            <p>Thakurgaon</p>
        </div>
    );
};

export default Developer;