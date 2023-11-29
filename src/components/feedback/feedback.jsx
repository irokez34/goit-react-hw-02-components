import './feedback.css';
import React from 'react';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlerClick = evt => {
    const targetText = evt.target.textContent;

    switch (targetText) {
      case 'Good':
        this.setState(prev => ({
          good: prev.good + 1,
        }));
        break;
      case 'Neutral':
        this.setState(prev => ({
          neutral: prev.neutral + 1,
        }));
        break;
      case 'Bad':
        this.setState(prev => ({
          bad: prev.bad + 1,
        }));
        break;
    }
  };

  render() {
    return (
      <div className="btns-container">
        <button className="state-btn-item" onClick={this.handlerClick}>
          Good
        </button>
        <button className="state-btn-item" onClick={this.handlerClick}>
          Neutral
        </button>
        <button className="state-btn-item" onClick={this.handlerClick}>
          Bad
        </button>
      </div>
    );
  }
}

export default Feedback;
