import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from './section/section';

import React from 'react';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedBackUpdate = ({ target }) => {
    this.setState(prevState => {
      return {
        [target.textContent]: prevState[target.textContent] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };
  countPositiveFeedbackPercentage = (total, positive) => {
    const percnet = (positive / total) * 100;
    return percnet.toFixed(0);
  };

  render() {
    return (
      <div
        style={{
          width: '300px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.feedBackUpdate}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.countTotalFeedback(),
              this.state.good
            )}
          />
        </Section>
      </div>
    );
  }
}
