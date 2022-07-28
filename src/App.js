import React,{useState ,useEffect} from 'react';

import {Expenses} from './components/Expenses/Expenses';
import { NewExpenses } from './components/NewExpenses/NewExpenses';


let DummeyExpress =[
  // {
  //   id:'e1',
  //   title:'College Fee',
  //   Amount: 11120,
  //   date: new Date(2021,5,12)
  // },
  // {
  //   id:'e2',
  //   title:'School Fee',
  //   Amount: 1112,
  //   date: new Date(2021,5,12)
  // },
  // {
  //   id:'e3',
  //   title:'Book',
  //   Amount: 1100,
  //   date: new Date(2021,5,12)
  // },
  // {
  //   id:'e4',
  //   title:'Uniform',
  //   Amount: 3000,
  //   date: new Date(2021,5,12)
  // },
  // {
  //   id:'e5',
  //   title:'shoes',
  //   Amount: 1100,
  //   date: new Date(2021,5,12)
  // }
];

const  App = () => {

  const [expenses,setExpenses] = useState(DummeyExpress);

 


  // useEffect(() => {
  //   fetch('https//localhost/sample-api/api/read.php').then(
  //     response => {
  //       return response.json();
  //     }
  //     ).then(
  //       data =>{
  //         console.log(data)
  //         setExpenses(data);
  //       }
  //     );
  // } ,[]);



const  addExpenseHandler = (expense) =>{
  // console.log(expense);
  const updatedExpense = [expense, ...expenses]
setExpenses(updatedExpense)
}


  return (
    <div>
    {/* <h2>lets get start</h2> */}
    <NewExpenses onAddExpense={addExpenseHandler}/>
    <Expenses  item={expenses}/>
                   
    </div>
  )
 
}

export default App;
