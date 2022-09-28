import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
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
            </div>
        </div>
    );
};

export default Home;