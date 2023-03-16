import { useContext, useState } from 'react'
import { CryptoContext } from '../context/CryptoContext'

const Pagination = () => {
  const { currentPage, setCurrentPage } = useContext(CryptoContext)

  const TotalNumber = 5
  const next = () => {
    if (currentPage < TotalNumber) setCurrentPage(currentPage + 1)
  }
  const prev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  return (
    <div className='flex items-center'>
      <ul className='flex items-center justify-end text-sm'>
        <li className='flex items-center'>
          <button className='outline-0 hover:text-blue w-8' onClick={prev}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </li>
        <li>
          <button
            className={
              currentPage > 1
                ? 'outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center text-lg'
                : 'hidden'
            }
          >
            ...
          </button>
        </li>
        <li>
          <button
            onClick={prev}
            className={
              currentPage > 2
                ? 'outline-0 hover:bg-blue hover:text-white  rounded-full w-8 h-8 flex items-center justify-center bg-blueLight mx-1.5'
                : 'hidden'
            }
          >
            {currentPage - 1}
          </button>
        </li>
        <li>
          <button
            className='outline-0 bg-blue text-white  rounded-full w-8 h-8 flex items-center justify-center mx-1.5'
            disabled
          >
            {currentPage}
          </button>
        </li>
        <li>
          <button onClick={next} className={currentPage<TotalNumber?'outline-0 hover:bg-blue hover:text-white  rounded-full w-8 h-8 flex items-center justify-center bg-blueLight mx-1.5':"hidden" }>
            {currentPage + 1}
          </button>
        </li>
        <li>
          <button
            className={
              currentPage < TotalNumber - 1
                ? 'outline-0 hover:text-blue rounded-full w-8 h-8 flex items-center justify-center text-lg'
                : 'hidden'
            }
          >
            ...
          </button>
        </li>
        <li>
          <button
            className={
              currentPage < TotalNumber - 1
                ? 'outline-0 hover:bg-blue hover:text-white rounded-full w-8 h-8 flex items-center justify-center bg-blueLight mx-1.5'
                : 'hidden'
            }
          >
            {TotalNumber}
          </button>
        </li>
        <li className='flex items-center' onClick={next}>
          <button className='outline-0 hover:text-blue w-8'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
