import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

import React, { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setbBad] = useState(0);

  const statusInfo = {
    good,
    neutral,
    bad,
  };

  const onLeaveFeedback = ({ target: { textContent } }) => {
    switch (textContent) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setbBad(bad + 1);
        break;
      default:
        throw new Error('Якась ...');
        break;
    }
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = statusInfo;

    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = statusInfo;
    return Number(((good / (neutral + bad + good)) * 100).toFixed());
  };

  return (
    <div>
      <Section title="Отзыв быстренько сюда">
        <FeedbackOptions
          options={Object.keys(statusInfo)}
          onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
