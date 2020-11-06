import React from 'react'
import Day from './Day'

const MyOwnCalendar = () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7]
  const activities = ["Programming", "Japanese Lesson", "Chess Game"]

  let dates = numbers.map(number => {
    return {date: number, activities: activities} 
  })


  return (
    <div>
      { dates.map(date => <Day date={date} />)}
    </div>
  )
}

export default MyOwnCalendar