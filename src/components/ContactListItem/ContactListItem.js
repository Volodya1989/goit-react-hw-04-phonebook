import PropTypes from "prop-types";
import { DeleteBtn, Item, Text, Span, Phone } from "./ContactListItem.styled";
import { CiFaceSmile } from "react-icons/ci";

const ContactListItem = ({ number, name, onDelete }) => {
  return (
    <Item>
      <Text>
        <Span>
          <CiFaceSmile />
        </Span>
        {name}: <Phone>{number}</Phone>
      </Text>

      <DeleteBtn type="button" onClick={onDelete}>
        Delete
      </DeleteBtn>
    </Item>
  );
};
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactListItem;
