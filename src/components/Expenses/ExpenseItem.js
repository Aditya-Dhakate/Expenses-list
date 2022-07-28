import '../UI/ExpenseItem.css'

// import React,{useState } from 'react'
import { ExpenseDate } from './ExpenseDate'
// import React,{useState} from 'react';

export const ExpenseItem = (props) => {


  // const [newTitle, setNewTitle] = useState();

// const [Delete, setDelete] = useState();




//  const clickHandler = () =>{
//   setDelete(Delete);
//  }

//  const changeHandler = (event) => {
//   setNewTitle(event.target.value);
//   console.log(changeHandler)
//  }

//   const onDelete = () =>{
//     console.log('i am delete')


//   const [todo, setTodo] = useState([])


//   setTodo(todo.filter((e)=>{
//     return e == todo;
//   }));

// }




  return (
    <div className='expens-item'>
      <ExpenseDate date={props.date}/>
      <div className='expens-items'>
        <h2>
          {props.title}
        </h2>
        {/* <button onClick={()=>onDelete(todo)}>Delete</button>/////// */}
        <div className='price-item'>${props.Amount}</div>
      </div>
      {/* <input type="text" value={newTitle} onChange={changeHandler}/>
      <button onClick={clickHandler}>Change Title</button> */}
    </div>
  )
}
