import PropTypes from "prop-types";
import { Input, Label } from "./Filter.styled";

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
        required
      />
    </Label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
export default Filter;
