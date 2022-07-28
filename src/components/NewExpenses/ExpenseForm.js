import React from 'react'
import './ExpenseForm.css'
import { useState } from 'react'


export const ExpenseForm = (props) => {


const [enterTitle, setEnterTitle] = useState('')

const [enterAmount, setEnterAmount] = useState('')

const [enterDate, setEnterDate] = useState('')


const titleChangerHandler = (event) => {
  setEnterTitle(event.target.value)
}

const amountChangerHandler = (event) => {
  setEnterAmount(event.target.value)
}

const dateChangerHandler = (event) => {
  setEnterDate(event.target.value)
}


const submitHandler = (event) => {
   event.preventDefault(); 
   

   const expenseData = {
    title:enterTitle,
    Amount:enterAmount,
    date: new Date(enterDate)
   }

    props.onSaveExpenseData(expenseData);




  //  console.log(expenseData)
       
   setEnterTitle('');
   setEnterAmount('');
   setEnterDate('');
};




  return (
    <div>

      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
               <lable>
                TITLE</lable>
               <input type='text' value={enterTitle}  onChange={titleChangerHandler}/>
            </div>
            <div className='new-expense__control'>
               <lable>
                Amount</lable>
               <input type='Number' value={enterAmount} min="0.01" step="0.01" onChange={amountChangerHandler }/>
            </div>
            <div className='new-expense__control'>
               <lable>
                NUmber</lable>
               <input type='date' value={enterDate} onChange={dateChangerHandler}/>
            </div>
        </div>
        <div className='new-expense__action'>
       
            <button type='submit'>ADD EXPENSE</button>
        </div>
      </form>

    </div>
  )
}
