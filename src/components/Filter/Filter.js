import { MyInput, MyLable } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <MyLable>
      Find contacts by name
      <MyInput name="filter" type="text" value={value} onChange={onChange} />
    </MyLable>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};