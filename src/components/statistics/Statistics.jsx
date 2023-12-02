import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statistiscList = (
    <ul className="state-list-result">
      <li className="state-result-item">Good:{good} </li>
      <li className="state-result-item">Neutral:{neutral} </li>
      <li className="state-result-item">Bad:{bad} </li>
      <li className="state-result-item">Total:{total} </li>
      <li className="state-result-item">
        Positive feedback:{positivePercentage}%
      </li>
    </ul>
  );

  return <>{total ? statistiscList : null}</>;
};

export default Statistics;
