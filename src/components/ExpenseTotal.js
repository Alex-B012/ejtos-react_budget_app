import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, currency_chosen } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: <span id="expenseTotal_currency_sign_id">{currency_chosen.charAt(0)}</span>{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;
