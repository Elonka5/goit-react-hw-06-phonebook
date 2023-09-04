import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

const LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = idInputName => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === idInputName.name.toLowerCase()
    );
    if (isExist) {
      alert(`${idInputName.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, idInputName]);
  };

  const handleDeleteContact = idContact => {
    setContacts(prevState => prevState.filter(({ id }) => id !== idContact));
  };

  const handleInputFilter = evt => {
    setFilter(evt.target.value);
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const getfilteredContacts = filteredContacts();

  return (
    <div className="container">
      <Section title="Phonebook">
        <Form onSubmit={handleSubmit}></Form>
      </Section>
      <Section title="Contacts">
        <Filter filterContact={handleInputFilter} />
        <ContactsList
          contacts={getfilteredContacts}
          onRemoveContact={handleDeleteContact}
        ></ContactsList>
      </Section>
    </div>
  );
};
