import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('clicked');
    };
 
    return(
        <Card className= "expense-item">
            <ExpenseDate expenseItemDate = {props.expenseItemDate}/>
            <div className = "expense-item__description">
                <h2>{props.expenseItemDescription}</h2>
                <div className="expense-item__price">{props.expenseItemPrice}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    )
}

export default ExpenseItem;

