import React from 'react';
import './Toast.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Toast = () => {
    const diffToast = () => {
        toast("Your Activities Complited")
    }
    return (
        <div>
            <div>
                <button onClick={diffToast} className='exercise-activities-btn'>Activity Complete</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Toast;