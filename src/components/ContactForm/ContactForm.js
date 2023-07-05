import PropTypes from "prop-types";

import { Component } from "react";
import { Input, Label, Button } from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  // componentDidMount() {
  //   if (JSON.parse(localStorage.getItem("contacts"))) {
  //     console.log(
  //       "data from localStorage: ",
  //       JSON.parse(localStorage.getItem("contacts"))
  //     );
  //   }
  // }

  handleOnChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleOnChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
