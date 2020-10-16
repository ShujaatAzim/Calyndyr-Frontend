import React, { useState, useEffect } from 'react'

const DateViewContainer = props => {

  const { date } = props

  const [clickedDate, setClickedDate] = useState(null)
  const [activities, setActivities] = useState([])

  // will use this to find the day object on the backend where the day.date === date object in props

  // useEffect(() => {
  //   fetch(`http://localhost:3000/days/${date.id}`)
  //   .then(resp => resp.json())
  //   .then(data => setClickedDate(data))
  // }, [])

  return (
    <div>
      {/* <DateView date={date} activities={activities} />  */}
    </div>
  )
}

export default DateViewContainer