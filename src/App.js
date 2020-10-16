import React, { useState } from 'react'
import Calendar from 'react-calendar'
import DateViewContainer from './DateViewContainer'
import 'react-calendar/dist/Calendar.css'

const App = () => {

  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setDate} calendarType={"US"} date={date} />
      <DateViewContainer date={date.toDateString()} />
    </div>
  )
}

export default App;
