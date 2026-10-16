import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='p-3'>
      <h2>Dashboard</h2>
      <hr />
      <div className='felx  gap- my-3'>
        <Link className='px-4 py-2 m-3 bg-amber-700' href='/dashboard/account'>Account</Link>
        <Link className='px-4 py-2 bg-amber-700' href='/dashboard/settings'>Settings</Link>
      </div>
    </div>
  )
}

export default Dashboard
