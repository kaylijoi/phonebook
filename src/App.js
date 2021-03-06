import React, { useState, useEffect } from 'react';
import AddContactForm from './components/AddContactForm.js';
import Contacts from './components/Contacts.js';
import Filter from './components/Filter.js';
import axios from 'axios';


const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  if (persons.find(p => p.name === newName && p.number === newNumber)) {
    alert(`${newName}: ${newNumber} is already in the phonebook.`)
    setNewName('')
  } 

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameObject))
    setNewName('')    
    setNewNumber('')
  }

  let filteredPersons = persons;

  if (filter) {
    console.log(filter)
    filteredPersons = persons.filter(
      p => p.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1
    );
  }

  console.log(filteredPersons)

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filter} onChange={setFilter} />

      <AddContactForm 
        name={newName}
        number={newNumber}
        nameChange={setNewName}
        numberChange={setNewNumber}
        onSubmit={addName}
      />
      
      <Contacts persons={filteredPersons} />

    </div>
  )
}

export default App;
