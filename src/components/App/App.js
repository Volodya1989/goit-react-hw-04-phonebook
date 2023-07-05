// Separate named imports, this makes the code more readable
import { useEffect, useState } from "react";
import { Container, Phonebook, Contacts } from "components/App/App.styled";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { nanoid } from "nanoid";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

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
        alert(`${data.name} is already in contacts.`);
        return [...prevContacts];
      } else {
        return [...prevContacts, data];
      }
    });
  };

  const deleteContact = (contactId) => {
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
