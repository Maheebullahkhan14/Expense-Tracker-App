import React, { useContext } from 'react'
import { AppContext } from '../Context'

const Balance = () => {
  const {transactions} = useContext(AppContext)

  const Amount = transactions.map((transaction)=>transaction.amount)
  const Total = Amount.reduce((acc , ele) => acc+=ele , 0)
  return (
    <>
        <div className='Balance_div'>
            <h4>YOUR BALANCE</h4>
            <h3>$ 
            <span>{Total}
            </span> </h3>
        </div>
    </>
  )
}

export default Balance
