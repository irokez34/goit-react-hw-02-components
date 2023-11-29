import './feedback.css';
import React from 'react';

class Feedback extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

render() {
  
    return (
        
       <div className='btns-container'> 
        <button className='state-btn-item'>Good</button>
        <button className='state-btn-item'>Neutral</button>
        <button className='state-btn-item'>Bad</button>
        </div>
    )
}



}


export default Feedback;


