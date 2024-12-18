import { useContext } from 'react'
import { transactionContext } from '../context/Transaction'

function Transactions() {
  const { transactionData } = useContext(transactionContext)
  return (
    <>
      <div className="mx-5 shadow-xl">
        <main className="">
          <h1 className="uppercase font-semibold bg-white p-3 px-5">Transaction History</h1>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sr. No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    transaction
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Exp. timer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Del.
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((val, id) => (
                  <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4">{id+1}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {val.address}
                    </th>
                    <td className="px-6 py-4 text-red-500">{val.timer} Left</td>
                    <td className="px-6 py-4 text-red-500 cursor-pointer">Withdraw</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  )
}

export default Transactions
