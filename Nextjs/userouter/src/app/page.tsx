"use client"
import React from 'react'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter()

  const navigate =(page: string) => {
    router.push(`/${page}`)
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("login")}>Login Page</button>
      <Link href="/colors">Colors</Link>
    </div>
  )
}

export default Home
