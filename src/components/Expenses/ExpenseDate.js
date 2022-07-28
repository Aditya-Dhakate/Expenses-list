import React from 'react'
import '../UI/ExpenseDate.css'


export const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-Us',{month: 'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-Us',{day: '2-digit'}); 


  return (
    <div>
      <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='.expense-date__year'>{year}</div>
        <div className='expense-date__date'>{day}</div>
      </div>
    </div>
  )
}
