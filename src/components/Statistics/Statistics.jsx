import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({
  value: { good, neutral, bad },
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <ul className={css.list}>
        <li className={css.statList}>Good: {good}</li>
        <li className={css.statList}>Neutral: {neutral}</li>
        <li className={css.statList}>Bad: {bad}</li>
        <li className={css.statList}>Total: {countTotalFeedback()}</li>
        <li className={css.statList}>
          Positive feedback: {countPositiveFeedbackPercentage()}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  value: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export {Statistics};