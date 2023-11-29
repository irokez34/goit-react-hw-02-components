import Statistics from './statistics/Statistics'
import Feedback from './feedback/feedback'
import Section from "./section/section";
export const App = () => {
  return (
    <div 
    >
     <Section title = "Statistics" ><Statistics/></Section>
     <Section title='Please leave feedback'><Feedback/></Section>
    </div>
  );
};
