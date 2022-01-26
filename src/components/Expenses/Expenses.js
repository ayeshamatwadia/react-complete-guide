import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {

    return(    
        <Card className = "expenses">
            {props.expenses.map((expenseItem, index) => {
              return( 
              <ExpenseItem key={expenseItem.title}
                expenseItemDate = {expenseItem.date} 
                expenseItemDescription = {expenseItem.title} 
                expenseItemPrice = {expenseItem.amount}>
               </ExpenseItem>
               ) 
            })}
        </Card>
    )

}

export default Expenses;