import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    

    return(
        <div className= "expense-item">
            <ExpenseDate expenseItemDate = {props.expenseItemDate}/>
            <div className = "expense-item__description">
                <h2>{props.expenseItemDescription}</h2>
                <div className="expense-item__price">{props.expenseItemPrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;

