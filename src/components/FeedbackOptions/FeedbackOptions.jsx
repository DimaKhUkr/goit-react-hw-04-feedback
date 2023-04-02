import PropTypes from 'prop-types';

import { Btns, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Btns>
      {options.map(btn => (
        <div key={btn}>
          <Btn type="button" onClick={onLeaveFeedback}>
            {btn}
          </Btn>
        </div>
      ))}
    </Btns>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
