import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expense = (props) => {
    const [filteredYear, setFilterYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    };
    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expense;