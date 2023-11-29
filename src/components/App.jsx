import Statistics from './statistics/Statistics';
import Feedback from './feedback/feedback';
import Section from './section/section';
import Notification from './notification-message/notification';
import React from 'react';
export class App extends React.Component {
  state = {
    good: 0,
    netural: 0,
    bad: 0,
}
render()
  {return (
    <div
      style={{
        width: '300px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <Notification/>
      <Section title="Please leave feedback">
        <Feedback />
      </Section>
      <Section title="Statistics">
        <Statistics />
      </Section>
    </div>
  );}
};
