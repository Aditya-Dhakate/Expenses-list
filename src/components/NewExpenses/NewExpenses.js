import React from 'react'
import './NewExpenses.css'
import './ExpenseForm'
import { ExpenseForm } from './ExpenseForm'

export const NewExpenses = (props) => {

   const saveExpenseDataHandler =  (expenseData) => { 
        
    const expensedata = {
      ...expenseData,
      id:Math.random().toString ()
    }

   props.onAddExpense(expensedata);

    
    console.log(expensedata)

   };



  return (
    <div className='new-expenses'>
      
     <ExpenseForm onSaveExpenseData = 
                         {saveExpenseDataHandler}/>


    </div>
  )
}
