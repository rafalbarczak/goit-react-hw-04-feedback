import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <>
    <p className={css.stat}>Good: {good}</p>
    <p className={css.stat}>Neutral: {neutral}</p>
    <p className={css.stat}>Bad: {bad}</p>
    <p className={css.stat}>Total: {total}</p>
    <p className={css.stat}>
      Positive feedback: {total > 0 ? positiveFeedback : 0}%
    </p>
  </>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
