import React, {useState }from 'react';
import './ExpenseItem.css'

function ExpenseDetails(props){

    const [title,setTitle]=useState(props.title);

    function ChangeTitle(){
        setTitle('update');
        // console.log(title) // console.log(' button clicked') // console.log(setTitle)
    }

    let [amount,setAmount]=useState(props.amount);
    function ChangeExpense(){
       setAmount(100);
    }

    function DeleteExpense(){
        console.log('deleteexpense button clicked')
    }
    return(
        <div className="expense-item__description ">
        <h2>{title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price ">Rs{amount}</div>
        <button onClick={ChangeExpense}>Change expense</button>
        <button onClick={ChangeTitle}>Change title</button>
        <button onClick={DeleteExpense}>Delete Expense</button>
    </div>
    );
}
export default ExpenseDetails;
