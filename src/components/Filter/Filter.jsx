import PropTypes from 'prop-types';
import { SearchTitle, Search } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <>
      <SearchTitle>Find contacts by name</SearchTitle>
      <Search type="text" onChange={onChange} value={value} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
