import  './ExpenseItem.css';
function ExpenseItem(){
    const ExpenseDate=new Date(2023,20,1);
    const ExpenseDetail='Insurance'
    const ExpenseAmount=1000
    const LocationOfExpenditure='home';
    return (
        <div className="expense-item"> 
            <div>{ExpenseDate.toISOString()}</div>
            <div className="expense-item__description ">
                <h2>{ExpenseDetail}</h2>
                <h2>{LocationOfExpenditure}</h2>
                <div className="expense-item__price ">Rs{ExpenseAmount}</div>
            </div>
            
        </div>
    )
}
 export default ExpenseItem;