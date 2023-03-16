import debounce from 'lodash.debounce'
import { useContext, useState } from 'react'
import { CryptoContext } from '../context/CryptoContext'

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('')
  const { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext)
  const handleInput = (e) => {
    e.preventDefault()
    const query = e.target.value
    setSearchText(query)
    handleSearch(query)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch(searchText)
  }
  const selectCoin = (coin) => {
    setCoinSearch(coin)
    setSearchText('')
    setSearchData()
  }

  return (
    <>
      <form
        className='w-96 relative flex items-center font-fira'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          name='serach'
          className='w-full h-12 rounded-lg bg-[#f2f2f2] placeholder:text-grey-100 pl-2 required outline-0   border-transparent focus:border-blue focus:border-2'
          placeholder='Search here...'
          onChange={handleInput}
          value={searchText}
        />
        <button type='submit' className='absolute right-3 cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-full h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul className='absolute top-11 right-0 w-96 h-96 rounded overflow-x-hidden py-2 bg-bgBase bg-opacity-60 backdrop-blur-md'>
          {!searchData ? (
            <div className='w-full h-full flex justify-center items-center'>
              <div
                className='w-8 h-8 border-4 border-blue rounded-full border-b-bgBase animate-spin'
                role='status'
              />
              <span className='ml-2'>Searching</span>
            </div>
          ) : (
            searchData.map((coin) => {
              return (
                <li
                  key={coin.id}
                  className='flex items-center ml-4 my-2 cursor-pointer'
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className='w-[2rem] h-[2rem] mx-1.5'
                    src={coin.thumb}
                    alt={coin.name}
                  />
                  <span>{coin.name}</span>
                </li>
              )
            })
          )}
        </ul>
      ) : null}
    </>
  )
}

const Search = () => {
  const { getSearchResult } = useContext(CryptoContext)

  const debounceCall = debounce(function (val) {
    getSearchResult(val)
  }, 2000)

  return (
    <div className='relative'>
      <SearchInput handleSearch={debounceCall} />
    </div>
  )
}

export default Search
