import React from 'react'

const Filter = ({ value, onChange }) => {

  const handleFilterChange = event => {
    onChange(event.target.value);
  }

  return (
    <div>
      Filter by Name: <input value={value} onChange={handleFilterChange} />
    </div>
  )
}

export default Filter
