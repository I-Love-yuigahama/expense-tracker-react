import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './content/GlobalState';

function App() {
  return (
  <GlobalProvider>
    <div className="App">
        <div className="container">
          <Balance></Balance>
          <IncomeExpense></IncomeExpense>
          <TransactionList></TransactionList>
          <AddTransaction></AddTransaction>

        </div>
    </div>
  </GlobalProvider>
  );
}

export default App;
