import { FilterStyled } from './FilterStyled';

export const Filter = ({ filterContact }) => {
  return (
    <FilterStyled>
      <label>
        {' '}
        Find contact by name
        <input name="filter" placeholder="search" onChange={filterContact} />
      </label>
    </FilterStyled>
  );
};
