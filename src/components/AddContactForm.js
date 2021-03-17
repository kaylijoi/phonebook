import React from 'react'

const AddContactForm = ({ 
  name, 
  number, 
  nameChange, 
  numberChange, 
  onSubmit
}) => {
  

  const handlePersonChange = (event) => {
    nameChange(event.target.value)
  }

  const handleNumberChange = (event) => {
    numberChange(event.target.value)
  }
  return (
    <form onSubmit={onSubmit}>
      <div>
        Name: <input value={name} onChange={handlePersonChange} />
      </div>
      <div>
        Phone Number: <input value={number} onChange={handleNumberChange} />
      </div>
      <div>
        <input type="submit" value="add" />
      </div>
    </form>
  )
}

export default AddContactForm;
