import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  transactions: [
    { id: 1, text: "cash", amount: 500 },
    { id: 2, text: "football", amount: 200 },
    { id: 3, text: "football", amount: -200 },
  ],
};
const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Deletetransaction = (id) =>{
    dispatch({
      type : 'DELETE_TRANSACTION',
      payload : id
    })
  }

  const AddTransaction  = (transactions) =>{
    dispatch({
      type : 'ADD_TRANSACTION',
      payload : transactions
    })
  }
  

  return <AppContext.Provider value={{
    transactions : state.transactions ,
    Deletetransaction ,
    AddTransaction
  }} >{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
