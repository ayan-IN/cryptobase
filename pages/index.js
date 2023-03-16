import Filter from '../components/Filter'
import TableComponent from "../components/TableComponent"
import Logo from "../components/Logo"

const HomePage = () => {
  return (
    <div className='w-full min-h-screen bg-bgBase flex flex-col items-center justify-center py-10'>
      <div className='max-w-[80vw] min-h-[80vh] w-full h-full bg-white py-10 px-12 rounded-2xl shadow-lg'>
        <Logo />
        <Filter />
        <TableComponent />
      </div>
    </div>
  )
}

export default HomePage
