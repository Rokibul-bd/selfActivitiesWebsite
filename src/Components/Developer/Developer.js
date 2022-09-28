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
                    <h4 style={{ lineHeight: '12px' }}>Md Rokibul Islam</h4>
                    <address>Thakurgaon</address>
                </div>
            </div>
            <div className='developer-info'>
                <div>
                    <h3>65 Kg</h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>5.7</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>22Years</h3>
                    <p>Age</p>
                </div>
            </div>
        </div>
    );
};

export default Developer;