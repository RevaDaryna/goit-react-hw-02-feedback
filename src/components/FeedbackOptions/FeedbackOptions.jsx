import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <>
        <ul className={css.btnList}>
          {options.map(option => (
            <li key={option}>
              <button type="button" onClick={onLeaveFeedback}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};


export{FeedbackOptions}