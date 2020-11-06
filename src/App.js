import React, { useState } from 'react'
import MyOwnCalendar from './MyOwnCalendar'
// import { format } from 'date-fns'
// import { enGB } from 'date-fns/locale'
// import { DatePickerCalendar } from 'react-nice-dates'
// import 'react-nice-dates/build/style.css'

const App = () => {

  const [date, setDate] = useState()

  return (
    // <div style={{ paddingLeft: "33%", paddingRight: "33%" }}>
    //   <p>
    //     Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
    //   </p>
    //     <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
    // </div>
        <div>
          <MyOwnCalendar />
        </div>
  )
}

export default App;
