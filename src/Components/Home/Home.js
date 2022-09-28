import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Break from '../Break/Break';
import Developer from '../Developer/Developer';
import './Home.css'
const Home = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const hundleToAddCart = (activiti) => {
        console.log('clicked')
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
                            hundleToAddCart={hundleToAddCart(activiti.time)}
                        ></Activities>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Developer></Developer>
                <Break></Break>
                <div>
                    <h4>Exercise Details</h4>
                    <div className='exercise-time'>
                        <div>Exercise time:</div>
                        <div>200m</div>
                    </div>
                    <div className='exercise-time'>
                        <div>Break time:</div>
                        <div>60m</div>
                    </div>
                    <button className='exercise-activities-btn'>Activity Complete</button>
                </div>
            </div>
        </div>
    );
};

export default Home;