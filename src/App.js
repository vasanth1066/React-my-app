//import logo from './logo.svg';
import React ,{ useState } from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import ExpenseForm from './Components/NewExpense/ExpenseForm';

let dummyexpense = [
  { id:'e1',title: 'Insurance', date: new Date(2020, 3, 12), location: 'Home', amount: 3844 },
  { id:'e2',title: 'Shoping', date: new Date(2021, 4, 22), location: 'Mall', amount: 1000 },
  { id:'e3',title: 'Gadgets', date: new Date(2023, 1, 19), location: 'Electronis shop', amount: 1345 }
]


function App() {

const [expense,setExpense]=useState(dummyexpense);
  
  
  function addExpenseHandler (expenses){
    setExpense((previousExpense)=>{
        return [expenses,...previousExpense]
    })
       
  }
  
  return (
    <div>
      <h2>Let Get Starts</h2>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses item={expense}></Expenses>
    </div>
      
  );
}








// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

export default App;
