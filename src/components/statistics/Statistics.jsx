import './Statistics.css';
import Feedback from "../feedback/feedback";
import React from 'react';

const Statistics = () => 
  {
    <div className='statistic'>
    <ul className='state-list-result'>
        <li className='state-result-item'>Good: </li>
        <li className='state-result-item'>Neutre: </li>
        <li className='state-result-item'>Bad: </li>
        <li className='state-result-item'>Total: </li>
        <li className='state-result-item'>Positive feedback:{}%</li>
    </ul>
    </div>
    
  }
export default Statistics;
