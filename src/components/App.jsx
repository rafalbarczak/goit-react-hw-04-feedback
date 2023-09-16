import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';
import { useState } from 'react';

export const App = () => {
  const [stats, setStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const buttonHandler = type => {
    setStats({ ...stats, [type]: stats[type] + 1 });
  };

  const countTotalFeedback = () => {
    return stats.good + stats.neutral + stats.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((stats.good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div className={css.feedback}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={buttonHandler}
        />
      </Section>
      {total > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={stats.good}
            neutral={stats.neutral}
            bad={stats.bad}
            total={total}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
