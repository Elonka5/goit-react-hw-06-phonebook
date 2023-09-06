import { FilterStyled } from './FilterStyled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleInputChange = evt => {
    dispatch(addFilter(evt.target.value));
  };
  return (
    <FilterStyled>
      <label>
        {' '}
        Find contact by name
        <input
          name="filter"
          placeholder="search"
          onChange={handleInputChange}
        />
      </label>
    </FilterStyled>
  );
};
