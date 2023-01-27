import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  searchContact = e => this.setState({ filter: e.target.value });

  filterContacts = items =>
    items.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, searchContact, filterContacts, deleteContact } = this;

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} contacts={contacts} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 ? (
            <>
              <Filter onChange={searchContact} value={filter} />
              <ContactList
                items={filterContacts(contacts)}
                onDelete={deleteContact}
              />
            </>
          ) : (
            <Notification message="Ooops, there is no contact in your phonebook" />
          )}
        </Section>
      </Container>
    );
  }
}
