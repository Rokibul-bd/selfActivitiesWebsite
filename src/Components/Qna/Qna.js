import React from 'react';
import Quantions from '../Quantions/Quantions';
import './Qna.css'
const Qna = () => {
    return (
        <div className='qna-container'>
            <Quantions quantion="How Does React Work" ans="Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM."></Quantions>
            <Quantions quantion="Deffarance between props and state" ans="React is an opensource JavaScript library that offers a visual overview of the JavaScript architecture for conventional MVC. React promises programmers a model in which substrates cannot directly influence enclosing components—data are downstream, data changes in HTML are efficiently modified, and the DOM is abstracted to boost performance using Virtual DOM."></Quantions>
            <Quantions quantion="what wark useEffact without data load" ans="Before we continue, we should summarize the main concepts you’ll need to understand to master useEffect. Throughout the article, I will highlight the different aspects in great detail."></Quantions>
        </div>
    );
};

export default Qna;