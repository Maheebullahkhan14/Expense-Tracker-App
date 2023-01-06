import React, { useContext } from 'react'
import { AppContext } from '../Context'

const List = ({transaction}) => {
  const {Deletetransaction} = useContext(AppContext)
  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <>
        <div className={transaction.amount < 0 ? 'Minus' : 'Add'}>
            <h5>{transaction.text}</h5> <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className='Deletebtn' onClick={() => Deletetransaction(transaction.id)}>X</button>
        </div>
    </>
  )
}

export default List
