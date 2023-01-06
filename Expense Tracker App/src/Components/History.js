import React, { useContext } from 'react'
import { AppContext } from '../Context'
import List from './List'



const History = () => {
  const { transactions} = useContext(AppContext)
  
  return (
    <>
        <div className='History'>
            <h4>History</h4>
            {
              transactions.map((transaction)=> <List key={transaction.id} transaction = {transaction}/>)
            }
        </div>
    </>
  )
}

export default History
