import React from 'react'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome to your dashboard!</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Tasks */}
          <Link 
            href="/dashboard/tasks"
            className="block bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="mb-3">
              <h2 className="text-xl font-semibold text-gray-800">Tasks</h2>
            </div>
            <p className="text-gray-600">View, organize and manage your daily tasks.</p>
          </Link>

          {/* Analytics */}
          <Link 
            href="/dashboard/analytics"
            className="block bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="mb-3">
              <h2 className="text-xl font-semibold text-gray-800">Analytics</h2>
            </div>
            <p className="text-gray-600">Gain insights into your performance and trends.</p>
          </Link>

          {/* Settings */}
          <Link 
            href="/dashboard/settings"
            className="block bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="mb-3">
              <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
            </div>
            <p className="text-gray-600">Customize and tweak your dashboard settings</p>
          </Link>

          {/* Users */}
          <Link 
            href="/dashboard/users"
            className="block bg-green-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="mb-3">
              <h2 className="text-xl font-semibold text-gray-800">Users</h2>
            </div>
            <p className="text-gray-600">View and manage your user base.</p>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
