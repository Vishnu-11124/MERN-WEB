import Link from "next/link"


const Home = () => {
  return (
    <div>
      <h1 className='text-orange-600'>Welcome Dude</h1>
      <div>
        <button><Link href='/developers'>Developers</Link></button>
      </div>
    </div>
  )
}

export default Home
