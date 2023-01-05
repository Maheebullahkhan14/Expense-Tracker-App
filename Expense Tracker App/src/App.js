import logo from "./logo.svg";
import "./App.css";
import Balance from "./Components/Balance";
import IncandExp from "./Components/IncandExp";
import Addtransaction from "./Components/Addtransaction";
import History from "./Components/History";
import { AppProvider } from "./Context";

function App() {
  return (
    <>
      <AppProvider>
        <div className="Main">
          <h4>Expense Tracker App</h4>
          <Balance />
          <IncandExp />
          <History />
          <Addtransaction />
        </div>
      </AppProvider>
    </>
  );
}

export default App;
