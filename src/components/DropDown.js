import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const DropDown = () => {    
    let { currency_chosen } = useContext(AppContext);
    console.log("currency - DropDown.js: ", currency_chosen);

    const changeCurrency = (event) => {
        let currency_chosen_temp = event.target.value
        
        if(currency_chosen_temp === "$ Dollar"){            
            currency_chosen = "$ Dollar"
        } else if(currency_chosen_temp === "£ Pound"){
            currency_chosen = "£ Pound"
        } else if(currency_chosen_temp === "€ Euro"){
            currency_chosen = "€ Euro"
        } else if(currency_chosen_temp === "₹ Ruppee"){
            currency_chosen = "₹ Ruppee"
        }         

        document.getElementById("currency_change_id").value = currency_chosen;
        document.getElementById("currency_sign").innerHTML = currency_chosen.charAt(0);
        document.getElementById("budget_currency_sign_id").innerHTML = currency_chosen.charAt(0);
        document.getElementById("remaining_currency_sign_id").innerHTML = currency_chosen.charAt(0);
        document.getElementById("expenseTotal_currency_sign_id").innerHTML = currency_chosen.charAt(0);

        console.log("Class", document.getElementsByClassName("expenseItem_currency_sign_class"));
        let arr = document.getElementsByClassName("expenseItem_currency_sign_class");
        for (const el of arr) {
            el.innerHTML = currency_chosen.charAt(0);
        }
        
        // arr.forEach((el) => el.innerHTML = currency_chosen.charAt(0))
    };

    return (
        <div className='alert alert-success'>
            <select name="currency" id="currency_change_id" onChange={changeCurrency}>
                <option value="$ Dollar">$ Dollar</option>
                <option value="£ Pound">£ Pound</option>
                <option value="€ Euro">€ Euro</option>
                <option value="₹ Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default DropDown;
