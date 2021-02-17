import { enGB } from 'date-fns/locale'
import { format } from 'date-fns'
import { DatePickerCalendar, DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { useState } from 'react'


const DatePicker = () => {

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [focus, setFocus] = useState(START_DATE)


  const handleFocusChange = newFocus => {
    console.log("Focus changed")
    setFocus(newFocus || START_DATE)
  }
  return(
  <>
    <h1>Book your motorcycle today</h1>

    <DateRangePickerCalendar 
      locale={enGB} 
      startDate = {startDate}
      endDate = {endDate}
      focus = {focus}
      onStartDateChange = {setStartDate}
      onEndDateChange = {setEndDate}
      onFocusChange = {handleFocusChange}
    />
  </>
  )
}

export default DatePicker