import React from 'react'

const DateView = props => {

  return (
    <div>
      <h1>{props.date.toDateString()}</h1>
      <input type="checkbox" /> Activity 1
    </div>
  )
}

export default DateView