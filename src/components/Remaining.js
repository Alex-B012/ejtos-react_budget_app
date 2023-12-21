import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget, currency_chosen } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>            
            <span>Remaining: <span id="remaining_currency_sign_id">{currency_chosen.charAt(0)}</span>{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
