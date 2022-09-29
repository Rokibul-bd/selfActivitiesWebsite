import React from 'react';
import Quantions from '../Quantions/Quantions';
import './Qna.css'
const Qna = () => {
    return (
        <div className='qna-container'>
            <Quantions quantion="Whats your Name" ans="My Name Is Rakib"></Quantions>
            <Quantions quantion="How old are you" ans="I am 22 years old"></Quantions>
            <Quantions quantion="where are live in" ans="I am live in Thakurgaon"></Quantions>
        </div>
    );
};

export default Qna;