import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {

    return(    
        <div className = "expenses">
            {props.expenses.map((expenseItem, index) => {
              return( 
              <ExpenseItem 
                expenseItemDate = {expenseItem.date} 
                expenseItemDescription = {expenseItem.title} 
                expenseItemPrice = {expenseItem.amount}>
               </ExpenseItem>
               ) 
            })}
        </div>
    )

}

export default Expenses;