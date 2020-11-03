import React, { useState } from 'react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

const App = () => {

  const [date, setDate] = useState()

  const createDay = date => {
    let d = date
    fetch('http://localhost:3000/days', {
      method: 'POST',
      headers: {
        Content: "application/json",
        Accept: "application/json"
      },
      body: {
        day: {
          date: d
        }
      }
    })
    .then(resp => resp.json())
    .then(console.log(d))
  }

  return (
    <div style={{ paddingLeft: "33%", paddingRight: "33%" }}>
      <p>
        Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
      </p>
        <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
    </div>
  )
}

export default App;
