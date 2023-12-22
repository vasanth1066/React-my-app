//import logo from './logo.svg';

import './App.css';
import Expenses from './Components/Expenses/Expenses';
import ExpenseForm from './Components/NewExpense/ExpenseForm';




function App() {
  const expense = [
    { title: 'Insurance', date: new Date(2023, 3, 12), location: 'Home', amount: 3844 },
    { title: 'Shoping', date: new Date(2023, 4, 22), location: 'Mall', amount: 1000 },
    { title: 'Rent', date: new Date(2023, 6, 24), location: 'Home', amount: 7000 },
    { title: 'Electricty bill', date: new Date(2023, 8, 29), location: 'Office', amount: 876 },
    { title: 'Gadgets', date: new Date(2023, 1, 19), location: 'Electronis shop', amount: 1345 }
  ]
  return (
    <div>
      <h2>Let Get Starts</h2>
      <ExpenseForm/>
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
