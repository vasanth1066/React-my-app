import React,{useState} from 'react';
import './ExpenseForm.css'
function ExpenseForm(props){
    
    const[enteredtitle,setEneteredtitle]=useState('');
    const[enteredamount,setEneteredamount]=useState('');
    const[entereddate,setEnetereddate]=useState('');

    function ShowDetails(e){
        e.preventDefault();
        // let enteredtitle=document.getElementById('titleid').value
        // let enteredamount=document.getElementById('amountid').value
        // let entereddate=document.getElementById('dateid').value
        let myobj={
            id: Math.random().toString(),
            title:enteredtitle,
            amount:enteredamount,
            date:new Date(entereddate)
        }
        setEneteredtitle('');
        setEneteredamount('');
        setEnetereddate('');

        props.onAddExpense(myobj)
    }

    function titleChangehadler(e){
        setEneteredtitle(e.target.value);
        // console.log(e.target.value)
    }
    function amountChangehadler(e){
        setEneteredamount(e.target.value)
        // console.log(e.target.value)
    }
    function dateChangehadler(e){
        setEnetereddate(e.target.value);
        // console.log(e.target.value)
    }
  
    return (
        
        <div className='new-expense'>
        <form >
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>  ExpenseTitle </label>
                    <input type="text" id="titleid"value={enteredtitle} onChange={titleChangehadler}></input>
                </div>
                <div className="new-expense__controls">
                    <label> ExpenseAmount </label>
                    <input type="number" id="amountid"value={enteredamount} onChange={amountChangehadler}></input>
                    
                </div>
                <div className="new-expense__controls">
                    <label> ExpenseDate </label>
                    <input type="date"  id="dateid"value={entereddate} onChange={dateChangehadler}></input>
                </div>
                <div className="new-expense__actions">
                    <button onClick={ShowDetails}>Add Item</button>
                </div>
            </div>
            
           
            
        </form>
        </div>
    );
}
export default ExpenseForm;