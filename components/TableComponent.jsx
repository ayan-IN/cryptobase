import { useContext } from 'react'
import { CryptoContext } from '../context/CryptoContext'
import Pagination from './Pagination'

const TableComponent = () => {
  const { cryptoData, currency } = useContext(CryptoContext)
  return (
    <>
      <div className='flex flex-col mt-9 rounded'>
        {!cryptoData ? null : (
          <table className='w-full table-auto'>
            <thead className='capitalize text-base text-grey-100 font-medium border-b border-[#eaeaea]'>
              <tr>
                <th className='py-1'>asset</th>
                <th className='py-1'>name</th>
                <th className='py-1'>price</th>
                <th className='py-1'>total volume</th>
                <th className='py-1'>market cap change</th>
                <th className='py-1'>1H</th>
                <th className='py-1'>24H</th>
                <th className='py-1'>7D</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((rowData) => {
                return (
                  <tr
                    key={rowData.id}
                    className='text-center text-base border-b border-[#eaeaea] last:border-b-0 hover:bg-[#e5ebfb] hover:shadow-md'
                  >
                    <td className='py-4 flex items-center justify-center max-w-[200px]'>
                      <img
                        className='w-[2rem] h-[2rem] mx-1.5'
                        src={rowData.image}
                        alt={rowData.name}
                      />
                      <span className='uppercase'>{rowData.symbol}</span>
                    </td>
                    <td className='py-4 max-w-[200px]'>{rowData.name}</td>
                    <td className='py-4'>
                      {new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: currency,
                      }).format(rowData.current_price)}
                    </td>
                    <td className='py-4'>{rowData.total_volume}</td>
                    <td className='py-4'>
                      {rowData.market_cap_change_percentage_24h} %
                    </td>
                    <td
                      className={
                        Number(rowData.price_change_percentage_1h_in_currency) >
                        0
                          ? 'text-green py-4'
                          : 'text-red py-4'
                      }
                    >
                      {Number(
                        rowData.price_change_percentage_1h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        Number(
                          rowData.price_change_percentage_24h_in_currency
                        ) > 0
                          ? 'text-green py-4'
                          : 'text-red py-4'
                      }
                    >
                      {Number(
                        rowData.price_change_percentage_24h_in_currency
                      ).toFixed(2)}
                    </td>
                    <td
                      className={
                        Number(rowData.price_change_percentage_7d_in_currency) >
                        0
                          ? 'text-green py-4'
                          : 'text-red py-4'
                      }
                    >
                      {Number(
                        rowData.price_change_percentage_7d_in_currency
                      ).toFixed(2)}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
      <div className='flex items-center justify-between mt-8 capitalize h-[2rem]'>
        <span className=''>
          Data provided by{' '}
          <a href='https://www.coingecko.com/' target={'_blank'}>
            <img src='images/coingecko.svg' alt='coingecko' />
          </a>
        </span>
        <Pagination />
      </div>
    </>
  )
}

export default TableComponent
