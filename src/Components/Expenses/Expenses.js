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
        {props.item.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
    );
   
}

export default Expenses;