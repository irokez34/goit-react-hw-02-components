import './feedback.css';
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(nanoid());
  const feedbackBtns = options.map(option => {
    return (
      <>
        <button
          className="state-btn-item"
          key={nanoid()}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      </>
    );
  });
  return <>{feedbackBtns}</>;
};

export default FeedbackOptions;
