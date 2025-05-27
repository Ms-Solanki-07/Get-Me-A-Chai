"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className="flex justify-between items-center min-h-14 px-3 bg-gray-800 text-white">
      <Link href={"/"} className='flex items-center justify-center gap-1'>
        <img width={36} className='invert-25' src="tea.gif" alt="" />
        <div className="logo font-bold text-lg">GetMeAChai</div>
      </Link>
      <ul className="flex items-center space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>

        {!session && (
          <Link href="/login">
            <button type="button" className="text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800  rounded-lg text-lg px-3 py-1 text-center" >Login</button>
          </Link>
        )}

        {session && <>
          <div
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className='relative'
          >
            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" onClick={() => {setShowDropdown(!showDropdown) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
              <img width={34} className='mr-2 rounded-full border border-black' src={session.user.image} alt="Profile" />
              <span className='min-w-24 text-left'>{session.user.username}</span>
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <div id="dropdownHover" className={`z-10 ${showDropdown ? "" : "hidden"} absolute top-11 right-0  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Welcome : </div>
                <div className="font-medium truncate">{session.user.email}</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.username}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
                </li>
              </ul>
              <div className="py-2">
                <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</button>
              </div>
            </div>
          </div>
        </>}

      </ul>
    </nav>
  )
}

export default Navbar
