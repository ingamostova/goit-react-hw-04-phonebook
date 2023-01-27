import PropTypes from 'prop-types';
import { Info } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Info>{message}</Info>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
