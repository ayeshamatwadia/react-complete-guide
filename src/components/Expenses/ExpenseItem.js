import { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseItemDescription);
    
    const clickHandler = () => {
        setTitle('Updated!!!');
        console.log('clicked');
    };
 
    return(
        <Card className= "expense-item">
            <ExpenseDate expenseItemDate = {props.expenseItemDate}/>
            <div className = "expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.expenseItemPrice}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    )
}

export default ExpenseItem;

