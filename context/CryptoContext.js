import { createContext, useState, useEffect } from 'react'

//* Create Context Object
export const CryptoContext = createContext({})

//* Create the Provider Component
export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState()
  const [searchData, setSearchData] = useState()
  const [coinSearch, setCoinSearch] = useState('')
  const [currency, setCurrency] = useState('usd')
  const [sortBy, setSortBy] = useState('market_cap_desc')

  const [currentPage, setCurrentPage] = useState(1)

  const getCryptoData = async () => {
    console.log('Fetching Data')
    try {
      const responseData = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
      )
        .then((res) => res.json())
        .then((data) => data)
      console.log(responseData)
      setCryptoData(responseData)
    } catch (error) {
      console.error(error)
    }
  }

  const getSearchResult = async (query) => {
    try {
      if (query) {
        const responseData = await fetch(
          `https://api.coingecko.com/api/v3/search?query=${query}`
        )
          .then((res) => res.json())
          .then((data) => data)
        console.log(responseData)
        setSearchData(responseData.coins)
      }
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    console.log('Firing First Load')
    getCryptoData()
  }, [coinSearch, currency, sortBy, currentPage])

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        setSearchData,
        getSearchResult,
        setCoinSearch,
        currency,
        setCurrency,
        sortBy,
        setSortBy,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </CryptoContext.Provider>
  )
}
