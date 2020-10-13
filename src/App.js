import React, { useState } from 'react'
import Calendar from 'react-calendar'
import DateView from './DateView'
import 'react-calendar/dist/Calendar.css'

const App = () => {

  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Calendar onChange={setDate} calendarType={"US"} date={date} />
      <DateView date={date} />
    </div>
  )
}

export default App;
