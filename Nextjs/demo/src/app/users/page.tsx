import React from 'react'

interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const ACCENT_COLORS = [
  'from-rose-500 to-pink-600',
  'from-violet-500 to-purple-600',
  'from-sky-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-orange-600',
  'from-fuchsia-500 to-pink-600',
  'from-cyan-500 to-sky-600',
  'from-lime-500 to-green-600',
  'from-indigo-500 to-violet-600',
  'from-red-500 to-rose-600',
]

const UserPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json()

  return (
    <div
      className="min-h-screen bg-zinc-950 px-6 py-14"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" }}
    >
      {/* Google Font import via style tag */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap');`}</style>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3 font-medium">Directory</p>
        <div className="flex items-end justify-between">
          <h1
            className="text-5xl font-normal text-white leading-tight"
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Team <span className="text-zinc-400 italic">Members</span>
          </h1>
          <span className="text-zinc-600 text-sm font-medium tabular-nums">
            {users.length} users
          </span>
        </div>
        <div className="mt-5 h-px bg-linear-to-r from-zinc-700 via-zinc-600 to-transparent" />
      </div>

      {/* User Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {users.map((user, idx) => {
          const gradient = ACCENT_COLORS[idx % ACCENT_COLORS.length]
          return (
            <div
              key={user.id}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Top color strip */}
              <div className={`h-1 w-full bg-linear-to-r ${gradient}`} />

              <div className="p-6">
                {/* Avatar + Name */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} flex items-center justify-center text-white font-semibold text-sm shrink-0 shadow-lg`}
                  >
                    {getInitials(user.name)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm truncate leading-tight">{user.name}</p>
                    <p className="text-zinc-500 text-xs mt-0.5 truncate">@{user.username}</p>
                  </div>
                </div>

                {/* Contact details */}
                <div className="space-y-2.5 mb-5">
                  <DetailRow icon="✉" label={user.email} />
                  <DetailRow icon="☏" label={user.phone} />
                  <DetailRow icon="⌘" label={user.website} />
                </div>

                {/* Divider */}
                <div className="h-px bg-zinc-800 mb-4" />

                {/* Company */}
                <div className="space-y-1">
                  <p className="text-zinc-300 text-xs font-semibold truncate">{user.company.name}</p>
                  <p className="text-zinc-600 text-xs italic leading-snug line-clamp-2">
                    "{user.company.catchPhrase}"
                  </p>
                  <p className="text-zinc-700 text-xs leading-snug line-clamp-1">{user.company.bs}</p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-linear-to-br ${gradient} transition-opacity duration-300 pointer-events-none`}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function DetailRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <span className="text-zinc-600 text-xs w-4 shrink-0">{icon}</span>
      <span className="text-zinc-400 text-xs truncate">{label}</span>
    </div>
  )
}

export default UserPage