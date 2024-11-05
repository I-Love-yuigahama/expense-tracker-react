import React,{useContext} from 'react'
import { GlobalContext } from '../content/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction_amount => transaction_amount.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h1>Your Balance</h1>
          <h1>Rm{total}</h1>
    </>
  )
}
