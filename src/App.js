import React, { Component } from 'react';
import Container from './components/Container/Container';
import Form from './components/Form/Form.jsx';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Container>
        <h1 className={s.title}>Phonebook</h1>
        <Form></Form>
        <h2 className={s.contacts}>Contacts</h2>
      </Container>
    );
  }
}

export default App;
