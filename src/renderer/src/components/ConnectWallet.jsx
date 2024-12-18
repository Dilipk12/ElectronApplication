import { useContext } from 'react'
import { transactionContext } from '../context/Transaction'

function ConnectWallet() {
  const { balance } = useContext(transactionContext)
  return (
    <main className="mx-5 shadow-xl">
      <h1 className="text-3xl font-bold text-center pb-3 text-gray-700">USDT SENDER</h1>
      <div className="flex justify-between items-center bg-white p-5 rounded-md ">
        <div className="">
          <h3 className="font-semibold ">Balance</h3>
          <h1 className="text-4xl font-bold">
            {balance}
            <span className="text-sm font-bold pl-1">USDT</span>
          </h1>
        </div>
        <button className="text-green-500 rounded-md px-3 py-2 font-semibold">
          Wallet Connected
        </button>
      </div>
    </main>
  )
}

export default ConnectWallet
