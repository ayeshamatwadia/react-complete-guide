import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h1>Rendered this element !</h1>
      <ExpenseItem 
      expenseItemDate = {expenses[0].date} 
      expenseItemDescription = {expenses[0].title} 
      expenseItemPrice = {expenses[0].amount}>
      </ExpenseItem>

      <ExpenseItem 
      expenseItemDate = {expenses[1].date} 
      expenseItemDescription = {expenses[1].title} 
      expenseItemPrice = {expenses[1].amount}>
      </ExpenseItem>

      <ExpenseItem 
      expenseItemDate = {expenses[2].date} 
      expenseItemDescription = {expenses[2].title} 
      expenseItemPrice = {expenses[2].amount}>
      </ExpenseItem>

      <ExpenseItem 
      expenseItemDate = {expenses[3].date} 
      expenseItemDescription = {expenses[3].title} 
      expenseItemPrice = {expenses[3].amount}>
      </ExpenseItem>

    </div>
  );
}

export default App;
