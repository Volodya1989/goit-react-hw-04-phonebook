// Separate named imports, this makes the code more readable
import { Component } from "react";
import { Container, Phonebook, Contacts } from "components/App/App.styled";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  componentDidMount() {
    if (JSON.parse(localStorage.getItem("contacts"))) {
      this.setState({ contacts: JSON.parse(localStorage.getItem("contacts")) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      if (JSON.parse(localStorage.getItem("contacts"))) {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
      } else {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
      }
    }
  }

  addContact = (data) => {
    data.id = nanoid();

    this.setState((prevState) => {
      const isPresentOnList = !!prevState.contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      );
      if (isPresentOnList) {
        alert(`${data.name} is already in contacts.`);
      } else {
        return {
          contacts: [...prevState.contacts, data],
        };
      }
    });
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <Container>
        <Phonebook>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </Phonebook>
        <Contacts>
          <h1>Contacts</h1>

          <Filter filter={filter} onChangeFilter={this.changeFilter} />
          <ContactList
            filteredContacts={filteredContacts}
            onDelete={this.deleteContact}
          />
        </Contacts>
      </Container>
    );
  }
}
export default App;
