function ExpenseForm(){
    function ShowDetails(e){
        e.preventDefault();
        console.log(document.getElementById('titleid').value);
        console.log(document.getElementById('amountid').value);
        console.log(document.getElementById('dateid').value);
        
    }
    function titleChangehadler(e){
        console.log(e.target.value)
    }
    function amountChangehadler(e){
        console.log(e.target.value)
    }
    function dateChangehadler(e){
        console.log(e.target.value)
    }
    return (
        <form>
            
            <div>
                <label>  ExpenseTitle </label>
                <input type="text" id="titleid" onChange={titleChangehadler}></input>
            </div>
            <div>
                <label> ExpenseAmount </label>
                <input type="number" id="amountid" onChange={amountChangehadler}></input>
                
            </div>
            <div>
                <label> ExpenseDate </label>
                <input type="date"  id="dateid" onChange={dateChangehadler}></input>
            </div>
            <div>
                <button onClick={ShowDetails}>Add Item</button>
            </div>
            
        </form>
    );
}
export default ExpenseForm;