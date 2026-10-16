import Link from 'next/link'
import React from 'react'

const Settings = () => {
  return (
    <div>
      <h2>Manage settings</h2>
      <Link className='px-4 py-2 bg-teal-700 m-64' href='/dashboard/settings/notifications'>Notifications</Link>
    </div>
  )
}

export default Settings
