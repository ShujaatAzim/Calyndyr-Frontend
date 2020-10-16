import React, { useState } from 'react'
import Calendar from 'react-calendar'
import DateViewContainer from './DateView'
import 'react-calendar/dist/Calendar.css'

const App = () => {

  const [date, setDate] = useState(new Date());

  //might need to set date as a datestring in order to fetch from backend

  return (
    <div>
      <Calendar onChange={setDate} calendarType={"US"} date={date} />
      { console.log(date) }
      <DateViewContainer date={date} />
    </div>
  )
}

export default App;
