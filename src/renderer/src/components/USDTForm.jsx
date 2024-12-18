import { useContext, useState } from 'react'
import { transactionContext } from '../context/Transaction'

function USDTForm() {
  const [address, setAddress] = useState('0xcae1fb7Ef5d57Bf42893209a4b780B1e4Bc3dC0')
  const [amount, setAmount] = useState('')
  const [timer, setTimer] = useState('')

  const { addTransaction, balance, setBalance } =
    useContext(transactionContext);

   
  const handleTransactionData = (e) => {
    e.preventDefault()
    addTransaction({ address: address, timer: timer, id: Number(Date.now()) })
    alert("Your transaction is brodcasted with success into blockchain");
    setBalance(balance-amount);
    setAddress('');
    setAmount('');
    setTimer('');
    
  }

  return (
    <main className="mx-5 my-3 shadow-xl">
      <form
        onSubmit={handleTransactionData}
        className="p-5 bg-white rounded-md flex flex-col gap-3"
      >
        <h1 className="uppercase font-semibold border-b-2 pb-3  border-black">Add Transaction</h1>
        <div className=" flex flex-row items-center gap-3">
          <label htmlFor="Address" className="font-semibold">
            Recipient USDT Address :{' '}
          </label>
          <input
            className="bg-gray-300 w-[592px] px-4 py-1 rounded-sm outline-none"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="Address"
            required
          />
        </div>
        <div className="flex gap-6">
          <div className=" flex flex-row items-center gap-[125px]">
            <label htmlFor="Amount" className="font-semibold">
              Amount :{' '}
            </label>
            <input
              className="bg-gray-300 w-[295px] px-4 py-1 rounded-sm outline-none"
              type="text"
              name="Address"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className=" flex flex-row items-center gap-3">
            <label htmlFor="Amount" className="font-semibold">
              Timer :{' '}
            </label>
            <input
              className="bg-gray-300 px-4 py-1 rounded-sm outline-none"
              type="text"
              name="Address"
              value={timer}
              required
              onChange={(e) => setTimer(e.target.value)}
            />
             {/* <select className='px-2 py-1 bg-gray-300'>
                <option value="1 Day">1 Day</option>
                 <option value="5 Days">5 Days</option>
                <option value="7 Days">7 Days</option>
                <option value="15 Day">15 Days</option>
             </select> */}
            
          </div>
        </div>
        <div className=" flex flex-row items-center gap-[127px]">
          <label htmlFor="Network" className="font-semibold">
            Network :
          </label>
          <div className="flex gap-5">
            <div className="flex items-center">
              <input
                id="default-radio-1"
                type="radio"
                name="default-radio"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
              >
                BEP20
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                name="default-radio"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
              >
                BEP2
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-3"
                type="radio"
                name="default-radio"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="default-radio-3"
                className="ms-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
              >
                POCYGON
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-4"
                type="radio"
                name="default-radio"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="default-radio-4"
                className="ms-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
              >
                ERC20
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-5"
                type="radio"
                name="default-radio"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="default-radio-5"
                className="ms-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
              >
                SOLANA
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-6"
                type="radio"
                name="default-radio"
                className="w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="default-radio-6"
                className="ms-2 text-sm font-medium cursor-pointer text-gray-900 dark:text-gray-300"
              >
                TRC20
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="bg-gradient-to-t from-gray-700 to-gray-900 hover:bg-gradient-to-t hover:from-gray-900 hover:to-gray-900 duration-200 w-full text-white rounded-md px-7 py-1 font-semibold">
            Confirm
          </button>
        </div>
      </form>
    </main>
  )
}

export default USDTForm
