import './ExpenseItem.css'

function ExpenseDetails(props){
    function DeleteExpense(){
        console.log('deleteexpense button clicked')
    }
    function ChangeTitle(){
        console.log(' button clicked')
    }
    return(
        <div className="expense-item__description ">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price ">Rs{props.amount}</div>
        <button onClick={ChangeTitle}>Change title</button>
        <button onClick={DeleteExpense}>Delete Expense</button>
    </div>
    );
}
export default ExpenseDetails;
