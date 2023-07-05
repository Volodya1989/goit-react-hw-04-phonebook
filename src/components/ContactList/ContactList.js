import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem";
import { List, Text, Span } from "./ContactList.styled";
import { CiFaceFrown } from "react-icons/ci";

const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <List>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ name, number, id }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              onDelete={() => onDelete(id)}
            />
          );
        })
      ) : (
        <Text>
          <Span>
            <CiFaceFrown />
          </Span>
          No contacts listed
        </Text>
      )}
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
