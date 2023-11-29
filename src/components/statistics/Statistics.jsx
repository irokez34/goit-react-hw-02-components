import './Statistics.css';

import React from 'react';

class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  render() {
    return (<div className='statistic'>
    <ul className='state-list-result'>
        <li className='state-result-item'>Good: {this.state.good}</li>
        <li className='state-result-item'>Neutre: {this.state.neutral}</li>
        <li className='state-result-item'>Bad: {this.state.bad}</li>
        <li className='state-result-item'>Total: {this.state.good+this.state.bad+this.state.neutral}</li>
        <li className='state-result-item'>Positive feedback:{}%</li>
    </ul>
    </div>
    
    
    )
  }
}
export default Statistics;
