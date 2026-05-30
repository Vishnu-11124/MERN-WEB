import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon, UsersIcon } from 'lucide-react'

const Users = () => {
  const users = [
    { id: 5673, name: 'John David', email: 'john.david@eg.com', isActive: true, contact: '6745348790' },
    { id: 5674, name: 'Emma Wilson', email: 'emma.wilson@eg.com', isActive: true, contact: '9876543210' },
    { id: 5675, name: 'Michael Brown', email: 'michael.brown@eg.com', isActive: false, contact: '8765432109' },
    { id: 5676, name: 'Sophia Taylor', email: 'sophia.taylor@eg.com', isActive: true, contact: '7654321098' },
    { id: 5677, name: 'James Anderson', email: 'james.anderson@eg.com', isActive: true, contact: '6543210987' },
    { id: 5678, name: 'Olivia Thomas', email: 'olivia.thomas@eg.com', isActive: false, contact: '5432109876' },
    { id: 5679, name: 'William Jackson', email: 'william.jackson@eg.com', isActive: true, contact: '4321098765' },
    { id: 5680, name: 'Ava Harris', email: 'ava.harris@eg.com', isActive: true, contact: '3210987654' },
    { id: 5681, name: 'Benjamin Martin', email: 'benjamin.martin@eg.com', isActive: false, contact: '2109876543' },
    { id: 5682, name: 'Charlotte White', email: 'charlotte.white@eg.com', isActive: true, contact: '1098765432' },
  ]

  return (
    <div className="min-h-screen bg-[#f7f5f0] px-4 py-10 md:px-8">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1e3a2f]">
          <UsersIcon size={16} className="text-[#5db87a]" />
        </div>
        <h1 className="text-xl font-bold text-[#1a2e22]">Users Details</h1>
        <span className="rounded-full bg-[#eaf5ef] px-2.5 py-0.5 text-xs font-semibold text-[#2d6a4a]">
          {users.length} total
        </span>
      </div>

      {/* Table card */}
      <div className="overflow-hidden rounded-2xl border border-[#e4ede8] bg-white">
        <ul className="divide-y divide-[#f0f7f3]">
          {users.map((user) => (
            <li key={user.id} className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-[#f7f5f0] transition">
              {/* Avatar + info */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1e3a2f] text-sm font-bold text-white">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a2e22]">{user.name}</p>
                  <p className="text-xs text-[#9abfaa]">{user.email}</p>
                </div>
              </div>

              {/* Status + link */}
              <div className="flex items-center gap-3">
                <span className={`hidden rounded-full px-2.5 py-0.5 text-[11px] font-semibold sm:inline-block ${
                  user.isActive ? "bg-[#eaf5ef] text-[#2d6a4a]" : "bg-red-50 text-red-400"
                }`}>
                  {user.isActive ? "Active" : "Inactive"}
                </span>
                <a
                  href={`/dashboard/users/${user.id}`}
                  className="flex items-center gap-1 rounded-xl border border-[#d8e8de] px-3 py-1.5 text-xs font-medium text-[#3a5a46] transition hover:bg-[#eaf5ef]"
                >
                  View <ArrowRightIcon size={12} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Users