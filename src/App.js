//import logo from './logo.svg';
import './Components/ExpenseItem'
import './App.css';
import './Components/ExpenseItem.css'
import Card from './Components/Card';
import ExpenseItem from './Components/ExpenseItem';




function App() {
  const expense = [
    { title: 'Insurance', date: new Date(2023, 3, 12), location: 'Home', amount: 3844 },
    { title: 'Shoping', date: new Date(2023, 4, 22), location: 'Mall', amount: 1000 },
    { title: 'Rent', date: new Date(2023, 6, 24), location: 'Home', amount: 7000 },
    { title: 'Electricty bill', date: new Date(2023, 8, 29), location: 'Office', amount: 876 },
    { title: 'Gadgets', date: new Date(2023, 1, 19), location: 'Electronis shop', amount: 1345 }
  ]
  return (
    <Card className='expenses'>
      <h2>Let Get Starts</h2>

    <ExpenseItem title={expense[0].title} date={expense[0].date} amount={expense[0].amount } location={expense[0].location}></ExpenseItem>
    <ExpenseItem title={expense[1].title} date={expense[1].date} amount={expense[1].amount } location={expense[1].location}></ExpenseItem>
    <ExpenseItem title={expense[2].title} date={expense[2].date} amount={expense[2].amount } location={expense[2].location}></ExpenseItem>
    <ExpenseItem title={expense[3].title} date={expense[3].date} amount={expense[3].amount } location={expense[3].location}></ExpenseItem>
    <ExpenseItem title={expense[4].title} date={expense[4].date} amount={expense[4].amount } location={expense[4].location}></ExpenseItem>
    </Card>
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
