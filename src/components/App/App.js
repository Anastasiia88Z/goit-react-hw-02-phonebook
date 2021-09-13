import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from '../Container/Container';
import Form from '../Form/Form.jsx';
import ListContacts from '../ListContacts/ListContacts.jsx';
import Filter from '../Filter/Filter.jsx';
import s from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.setState(prevState => {
      const duplicateContact = this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );

      const newState = {
        contacts: [newContact, ...prevState.contacts],
      };
      return duplicateContact
        ? alert(`${name} is already in contacts`)
        : newState;
    });
  };

  handleDeleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={this.handleAddContact} />

        <h2 className={s.contacts}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ListContacts
          contacts={visibleContacts}
          onDelete={this.handleDeleteContacts}
        />
      </Container>
    );
  }
}
