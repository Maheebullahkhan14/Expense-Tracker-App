import React, { useState } from "react";


const Form = () => {
  const [text , setText] = useState('')
  const [amount , setamount] = useState('')
  return (
    <>
      <div className="Form">
        <h4>Add New Transaction </h4>
        <hr></hr>
        
          <div className="Text_div"> 
            <label>Text</label>
            <input type="text" 
            value={text}
            placeholder="Enter text.."
            onChange={(e) => setText(e.target.value)}></input>
          </div>
          <div className="amount_div">
            <label>Amount</label>
            <span>(negative-expense , positive -income)</span>
            <input type="number" placeholder="Enter Amount..." value={amount}
            onChange={(e) => setamount(e.target.value)}></input>
          </div>
          <button className="Addbtn" >Add Transaction</button>
        
      </div>
    </>
  );
};

export default Form;
