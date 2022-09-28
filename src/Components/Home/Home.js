import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import './Home.css'
const Home = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='home-container'>
            <div className="activities-container">
                {
                    activities.map(activiti => <Activities key={activiti.id}
                        activiti={activiti}
                    ></Activities>)
                }
            </div>
            <div className="cart-container">
                <h3>Activities Summary</h3>
            </div>
        </div>
    );
};

export default Home;