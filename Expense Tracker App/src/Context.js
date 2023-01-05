import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  transactions: [
    { id: 1, text: "cash", amount: 500 },
    { id: 2, text: "football", amount: 200 },
  ],
};
const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
