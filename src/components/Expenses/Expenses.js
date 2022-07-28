import '../UI/Expenses.css'
import React from 'react'
import { ExpenseItem } from './ExpenseItem'

export const Expenses = (props) => {
  return (
    <div className='expenses'>
          {
            props.item.map(
              expense => (
                <ExpenseItem key={expense.id}
                 date={expense.date}
                 title={expense.title}
                 Amount={expense.Amount}
                /> 
              )
            )
          }
             


        {/* <ExpenseItem id={props.item[0].id}
                 date={props.item[0].date}
                 title={props.item[0].title}
                 Amount={props.item[0].Amount}
                />
    <ExpenseItem id={props.item[1].id}
                 date={props.item[1].date}
                 title={props.item[1].title}
                 Amount={props.item[1].Amount}
                />
    <ExpenseItem id={props.item[2].id}
                 date={props.item[2].date}
                 title={props.item[2].title}
                 Amount={props.item[2].Amount}
                />            
    <ExpenseItem id={props.item[2].id}
                 date={props.item[2].date}
                 title={props.item[2].title}
                 Amount={props.item[2].Amount}
                />
    <ExpenseItem id={props.item[3].id}
                 date={props.item[3].date}
                 title={props.item[3].title}
                 Amount={props.item[3].Amount}
                />  */}
    </div>
  )
}
