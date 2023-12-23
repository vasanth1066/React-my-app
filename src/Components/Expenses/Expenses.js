import React,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFiltre from './ExpenseFiltre';

 const Expenses=(props)=>{
    
    const [filteredYear, setFilteredYear] = useState('');

    function filterChangeHandler ( selectedYear ) {
        setFilteredYear(selectedYear);
    }
    return (
        <Card className='expenses'>

        <ExpenseFiltre selected={filteredYear} onChangeFilter={filterChangeHandler} />

        <ExpenseItem title={props.item[0].title} date={props.item[0].date} amount={props.item[0].amount } location={props.item[0].location}></ExpenseItem>
        <ExpenseItem title={props.item[1].title} date={props.item[1].date} amount={props.item[1].amount } location={props.item[1].location}></ExpenseItem>
        <ExpenseItem title={props.item[2].title} date={props.item[2].date} amount={props.item[2].amount } location={props.item[2].location}></ExpenseItem>
        <ExpenseItem title={props.item[3].title} date={props.item[3].date} amount={props.item[3].amount } location={props.item[3].location}></ExpenseItem>
        <ExpenseItem title={props.item[4].title} date={props.item[4].date} amount={props.item[4].amount } location={props.item[4].location}></ExpenseItem>
    </Card>
    );
   
}

export default Expenses;