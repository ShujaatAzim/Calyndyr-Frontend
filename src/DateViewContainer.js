import React, { useState, useEffect } from 'react'
import DateView from './DateView'

const DateViewContainer = props => {

  const { date } = props

  const [days, setDays] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/days')
    .then(resp => resp.json())
    .then(data => setDays(data))
  }, [])

  return (
    <div>
      <DateView date={date} days={days} /> 
    </div>
  )
}

export default DateViewContainer