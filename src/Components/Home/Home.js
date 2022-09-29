import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { addToDb } from '../../utility/fakeDb';
import Activities from '../Activities/Activities';
import Break from '../Break/Break';
import Developer from '../Developer/Developer';
import Toast from '../Toast/Toast';
import './Home.css'
const Home = () => {
    const [activities, setActivities] = useState([]);
    const [expTime, setExpTime] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    useEffect(() => {
        const storedData = localStorage.getItem("time-cart");
        const data = JSON.parse(storedData)
        const getData = activities.find(singleItem => singleItem.id === data);
        if (getData) {
            setTime(getData.time)
        }
    }, [activities])
    const hundleToAddCart = (activiti) => {
        setExpTime(expTime + (+ activiti.time))
    }
    const hundleBreakTimeBtn = (activiti) => {
        setTime(activiti.time)
        addToDb(activiti.id)
    }
    return (
        <div className='home-container'>
            <div>
                <div className='activities-header-text'>
                    <h3 className='title-name'> <FontAwesomeIcon icon={faGamepad} /> Your Self activities</h3>
                    <p className='home-time'>Select todays your exercise</p>
                </div>
                <div className="activities-container">
                    {
                        activities.map(activiti => <Activities key={activiti.id}
                            activiti={activiti}
                            hundleToAddCart={hundleToAddCart}
                        ></Activities>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Developer></Developer>
                <h4>Add A Break</h4>
                <div className='break-btn-container'>
                    {
                        activities.map(activiti => <Break key={activiti.id}
                            hundleBreakTimeBtn={hundleBreakTimeBtn} activiti={activiti}
                        ></Break>)
                    }
                </div>
                <div>
                    <h4>Exercise Details</h4>
                    <div className='exercise-time'>
                        <div>Exercise time:</div>
                        <div>{+ expTime}m</div>
                    </div>
                    <div className='exercise-time'>
                        <div>Break time:</div>
                        <div>{time}m</div>
                    </div>
                    <Toast></Toast>
                </div>
            </div>
        </div>
    );
};

export default Home;