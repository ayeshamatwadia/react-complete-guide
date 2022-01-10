import './ExpenseItem.css';

function ExpenseItem() {

    const expenseItemDate = new Date(2021, 2, 28);
    const expenseItemDescription = 'Car Insurance';
    const expenseItemPrice = 283.67;

    return(
        <div className= "expense-item">
            <div>{expenseItemDate.toISOString()}</div>
            <div className = "expense-item__description">
                <h2>{expenseItemDescription}</h2>
                <div className="expense-item__price">{expenseItemPrice}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;

