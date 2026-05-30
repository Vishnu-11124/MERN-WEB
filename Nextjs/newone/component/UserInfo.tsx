import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, MailIcon, PhoneIcon, ShieldCheckIcon } from 'lucide-react'

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

const UserInfo = ({ id }: { id: number }) => {
  const user = users.find((u) => u.id === id)

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
        <p className="text-sm font-medium text-[#3a5a46]">User not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] px-4 py-10 md:px-8">

      {/* Back */}
      <Link
        href="/dashboard/users"
        className="mb-6 flex w-fit items-center gap-1.5 text-sm font-medium text-[#3a5a46] hover:text-[#1e3a2f] transition"
      >
        <ArrowLeftIcon size={15} /> Back
      </Link>

      {/* Card */}
      <div className="mx-auto max-w-sm rounded-2xl border border-[#e4ede8] bg-white p-6">

        {/* Avatar + name */}
        <div className="mb-6 flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1e3a2f] text-2xl font-bold text-white">
            {user.name.charAt(0)}
          </div>
          <div className="text-center">
            <h2 className="text-lg font-bold text-[#1a2e22]">{user.name}</h2>
            <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
              user.isActive ? "bg-[#eaf5ef] text-[#2d6a4a]" : "bg-red-50 text-red-400"
            }`}>
              {user.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-xl border border-[#e4ede8] bg-[#f7f5f0] px-4 py-3">
            <MailIcon size={15} className="shrink-0 text-[#9abfaa]" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9abfaa]">Email</p>
              <p className="text-sm text-[#1a2e22]">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#e4ede8] bg-[#f7f5f0] px-4 py-3">
            <PhoneIcon size={15} className="shrink-0 text-[#9abfaa]" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9abfaa]">Contact</p>
              <p className="text-sm text-[#1a2e22]">{user.contact}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border border-[#e4ede8] bg-[#f7f5f0] px-4 py-3">
            <ShieldCheckIcon size={15} className="shrink-0 text-[#9abfaa]" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#9abfaa]">Status</p>
              <p className={`text-sm font-medium ${user.isActive ? "text-[#2d6a4a]" : "text-red-400"}`}>
                {user.isActive ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserInfo