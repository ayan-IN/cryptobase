import { useContext, useRef } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import Search from './Search'

const Filter = () => {
  const { setCurrency, setSortBy } = useContext(CryptoContext)
  const currencyRef = useRef(null)

  const handleCurrencyChange = (e) => {
    e.preventDefault()
    const val = currencyRef.current.value
    setCurrency(val)
    currencyRef.current.value = ''
  }

  const handleSort = (e) => {
    e.preventDefault
    const val = e.target.value
    setSortBy(val)
  }
  return (
    <div className='w-full h-12 border-grey-100 rounded-lg flex items-center justify-between relative'>
      <Search />

      <div className='flex mr-7'>
        <form
          className='relative flex items-center font-fira mr-12'
          onSubmit={handleCurrencyChange}
        >
          <label
            htmlFor='currency'
            className='relative flex justify-center items-center mr-2 font-bold'
          >
            currency:{' '}
          </label>
          <input
            ref={currencyRef}
            className='w-16 bg-bgBase placeholder:text-grey-100 pl-2 required outline-0 border-transparent focus:border-2 focus:border-blue leading-4 h-12 border-grey-100 rounded-lg'
            type='text'
            name='currency'
            placeholder='usd'
          />
          <button type='submit' className='ML-1 cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </form>
        <label className='relative flex justify-center items-center'>
          <span className='font-bold mr-2'>sort by: </span>
          <select
            defaultValue={'market_cap_desc'}
            name='sortby'
            className='rounded-lg h-12 text-base pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0 bg-bgBase '
            onChange={handleSort}
          >
            <option value='market_cap_asc'>market cap asc</option>
            <option value='market_cap_desc'>market cap desc</option>
            <option value='volume_asc'>volume asc</option>
            <option value='volume_desc'>volume desc</option>
            <option value='id_asc'>id asc</option>
            <option value='id_desc'>id desc</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default Filter
