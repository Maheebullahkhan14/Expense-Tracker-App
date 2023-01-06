import React, { useContext } from 'react'
import { AppContext } from '../Context'

const IncandExp = () => {
  const {transactions} = useContext(AppContext)
  
  const Amount = transactions.map((transaction) => transaction.amount)
  const Income  = Amount.filter((item) => item > 0).reduce((acc, data) => acc+=data , 0).toFixed(2)

  const Expense = Amount.filter((item) => item < 0).reduce((acc,ele) => acc+=ele, 0).toFixed(2)*-1


  return (
    <>
        <div className='Data_Inc_Exp'>
            <div className='Income'>
                <h4>INCOME</h4>
                <span>${Income}</span>
            </div>
            <div className='Expense'>
                <h4>EXPENSE</h4>
                <span>${Expense}</span>
            </div>
        </div>
    </>
  )
}

export default IncandExp
