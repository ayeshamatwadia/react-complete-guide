import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    

    return(
        <Card className= "expense-item">
            <ExpenseDate expenseItemDate = {props.expenseItemDate}/>
            <div className = "expense-item__description">
                <h2>{props.expenseItemDescription}</h2>
                <div className="expense-item__price">{props.expenseItemPrice}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;

