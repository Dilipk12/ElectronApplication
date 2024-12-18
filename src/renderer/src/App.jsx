import { useState } from 'react'
import ConnectWallet from './components/ConnectWallet'
import USDTForm from './components/USDTForm'
import Transactions from './components/Transactions'
import { transactionContext } from './context/Transaction'
// import Loader from './components/Loader'

function App() {
  const [transactionData, setTransactionData] = useState([])
  const [balance, setBalance] = useState(5200.87);

  const [loader, setLoader] = useState(false)
  const addTransaction = (val) => {
    setTransactionData([...transactionData, val])
  }

  console.log(transactionData);

  return (
    <transactionContext.Provider
      value={{ transactionData, setTransactionData, addTransaction, loader, setLoader, balance, setBalance }}
    >
      <div className="pt-2 pb-5">
        <ConnectWallet />
        <USDTForm />
        <Transactions />
        {/* <Loader /> */}
      </div>
    </transactionContext.Provider>
  )
}

export default App
