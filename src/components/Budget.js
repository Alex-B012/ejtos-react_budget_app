import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency_chosen } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    let currency_sign = currency_chosen.charAt(0);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
  
    const handleBudgetChange = (event) => {
        if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        } else {
            setNewBudget(event.target.value);  
        }                       
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: <span id="budget_currency_sign_id">{currency_sign}</span></span>
            {/* <span>Budget: £{newBudget}</span> */}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} max="20000"></input>
        </div>
        );
};
export default Budget;
