import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Break from '../Break/Break';
import Developer from '../Developer/Developer';
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

    const hundleToAddCart = (activiti) => {
        setExpTime(expTime + (+ activiti.time))
    }
    const hundleBreakTimeBtn = (activiti) => {
        console.log(activiti.time)
        setTime(activiti.time)
    }
    return (
        <div className='home-container'>
            <div>
                <div className='activities-header-text'>
                    <h3>This is activities</h3>
                    <p>amar sonar bangla</p>
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
                        <div>{+ expTime} m</div>
                    </div>
                    <div className='exercise-time'>
                        <div>Break time:</div>
                        <div>{time}m</div>
                    </div>
                    <button className='exercise-activities-btn'>Activity Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Home;