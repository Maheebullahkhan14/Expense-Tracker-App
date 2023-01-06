import React, { useContext, useState } from "react";
import { AppContext } from "../Context";

const Form = () => {
  const [text, setText] = useState("");
  const [amount, setamount] = useState("");
  const { AddTransaction } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: +amount,
    };
    AddTransaction(newTransaction);
    
  };

  return (
    <>
      <div className="Form">
        <h4>Add New Transaction </h4>
        <hr></hr>
        <form onSubmit={onSubmit}>
          <div className="Text_div">
            <label>Text</label>
            <input
              type="text"
              value={text}
              placeholder="Enter text.."
              onChange={(e) => setText(e.target.value)}
            ></input>
          </div>

          <div className="amount_div">
            <label>Amount</label>
            <span>(negative-expense , positive -income)</span>
            <input
              type="number"
              placeholder="Enter Amount..."
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            ></input>
          </div>
          <button className="Addbtn">Add Transaction</button>
        </form>
      </div>
    </>
  );
};

export default Form;
