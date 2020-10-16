import React from 'react'

const DateView = props => {

  const { date } = props

  return (
    <div>
      <h1>{date}</h1>
      <input type="checkbox" /> Activity 1
    </div>
  )
}

export default DateView