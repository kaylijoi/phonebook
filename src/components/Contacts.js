import React from 'react'

const Contacts = ({persons}) => {

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        { persons.map(person => 
          <li key="person.id">{person.name}: {person.number}</li>)}
      </ul>
    </div>
  )
}
  // <li>{persons.name}: {persons.number}</li>


export default Contacts
