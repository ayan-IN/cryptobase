import Link from 'next/link'
const Logo = () => {
  return (
    <Link
      href={'/'}
      className='[text-decoration:none] flex items-center font-semibold text-lg w-min'
    >
      <img src='images/cryptobase.png' alt='cryptobase' className='w-16' />
      &nbsp;Cryptobase
    </Link>
  )
}

export default Logo
