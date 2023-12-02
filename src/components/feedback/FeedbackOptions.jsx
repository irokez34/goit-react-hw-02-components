import './feedback.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const feedbackBtns = options.map(option => {
    return (
      <>
        <button
          className="state-btn-item"
          key={option}
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
