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

    const filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className='expenses'>
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                {filteredExpense.length === 0 && <p>No expenses found.</p>}
                {filteredExpense.length === 0 &&
                    filteredExpense.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
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