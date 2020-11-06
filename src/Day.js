import React from 'react'

const Day = props => {

  const { date } = props

  return (
    <div>
      {date.date}
    </div>
  )
}

export default Day