import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Section, Title } from './App.styled';

import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { useLocalStorage } from 'hooks/useLocalStoage';

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addNewContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.some(({ name }) => name === data.name)
      ? Notify.warning(`${data.name} is already in contacts`)
      : setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

 return (
   <>
     <Section>
       <Title>Phonebook</Title>
       <Form addNewContact={addNewContact} />
     </Section>
     <Section>
       <Title>Contacts</Title>
       <Filter value={filter} onChange={changeFilter} />
       <ContactsList
         contacts={getVisibleContacts()}
         deleteContact={deleteContact}
       />
     </Section>
   </>
 );
}
