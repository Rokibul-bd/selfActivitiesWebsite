import React from 'react';
import './Activities.css'

const Activities = (props) => {
    const { hundleToAddCart, activiti } = props
    const { name, img, age, details, time } = activiti
    return (
        <div className='single-activiti'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>For Age: {age}</p>
            <p>{details}</p>
            <p>Time required: {time}</p>
            <button onClick={() => hundleToAddCart(activiti)} className='added-btn'>Add To List</button>
        </div>
    );
};

export default Activities;