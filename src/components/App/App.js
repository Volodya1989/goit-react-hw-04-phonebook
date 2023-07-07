// Separate named imports, this makes the code more readable
import { Container, Phonebook, Contacts } from "components/App/App.styled";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import useLocalStorage from "utils/customHooks";

const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useLocalStorage("filter", "");

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const addContact = (data) => {
    data.id = nanoid();

    setContacts((prevContacts) => {
      const isPresentOnList = prevContacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      );
      if (isPresentOnList) {
        Notiflix.Notify.failure(`${data.name} is already in your contacts.`);
        return [...prevContacts];
      } else {
        Notiflix.Notify.success(`${data.name} ADDED to your contact list.`);
        return [...prevContacts, data];
      }
    });
  };

  const deleteContact = (contactId) => {
    Notiflix.Notify.success(`Record DELETED from your contact list.`);

    setContacts((prevState) => {
      return prevState.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <Container>
      <Phonebook>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
      </Phonebook>
      <Contacts>
        <h1>Contacts</h1>

        <Filter filter={filter} onChangeFilter={changeFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          onDelete={deleteContact}
        />
      </Contacts>
    </Container>
  );
};

export default App;
