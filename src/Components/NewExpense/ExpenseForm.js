import React,{useState} from 'react';
import './ExpenseForm.css'
function ExpenseForm(){
    function ShowDetails(e){
        e.preventDefault();
        console.log(document.getElementById('titleid').value);
        console.log(document.getElementById('amountid').value);
        console.log(document.getElementById('dateid').value);
        
    }


    const[enteredtitle,setEneteredtitle]=useState('');
    const[enteredamount,setEneteredamount]=useState('');
    const[entereddate,setEnetereddate]=useState('');

    function titleChangehadler(e){
        setEneteredtitle(e.target.value);
        console.log(e.target.value)
    }
    function amountChangehadler(e){
        setEneteredamount(e.target.value)
        console.log(e.target.value)
    }
    function dateChangehadler(e){
        setEnetereddate(e.target.value);
        console.log(e.target.value)
    }
    return (
        <div className='new-expense'>
        <form >
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>  ExpenseTitle </label>
                    <input type="text" id="titleid" onChange={titleChangehadler}></input>
                </div>
                <div className="new-expense__controls">
                    <label> ExpenseAmount </label>
                    <input type="number" id="amountid" onChange={amountChangehadler}></input>
                    
                </div>
                <div className="new-expense__controls">
                    <label> ExpenseDate </label>
                    <input type="date"  id="dateid" onChange={dateChangehadler}></input>
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