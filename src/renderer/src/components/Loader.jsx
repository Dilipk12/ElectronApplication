import { useContext } from 'react'
import { transactionContext } from '../context/Transaction'

function Loader() {
  const { loader } = useContext(transactionContext)

  return (
    <>
      {loader ? (
        <div className=" absolute top-[200px] left-[350px] h-32 w-48 bg-gray-400 rounded-lg flex flex-col gap-5 items-center justify-center">
          <div className="border-8 border-black border-l-8 border-l-gray-300 animate-spin h-14 w-14 rounded-full"></div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default Loader
