"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import React from 'react'
import { UserButton, useAuth } from '@clerk/nextjs'

const Topbar = () => {
    const { isSignedIn } = useAuth()

    const topRoutes = [
        { label: "Instructor", path: "/instructor/courses" },
        { label: "Learning", path: "/learning" }
    ]

  return (
    <div className="flex justify-between items-center p-4">
        <Link href="/">
            <Image src="/logo.png" alt="Logo for website" height={100} width={200} />
        </Link>

        <div className="max-md:hidden w-[400px] rounded-full flex">
            <input 
                className="flex-grow bg-[#FFF8EB] rounded-1-full border-none outine-none text-sm pl-4 py-3" 
                placeholder="Search for courses" 
            />
            <button className="bg-[#FDAB04] rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-[#FDAB04]/80">
                <Search className="h-4 w-4" />
            </button>
        </div>

        <div className="flex gap-6 item-center">
            <div className="max-sm:hidden flex gap-6">
                {topRoutes.map((route) => (
                    <Link 
                    href={route.path} 
                    key={route.path} 
                    className="text-sm font-medium hover:text-[#FDAB04]">
                    {route.label}
                    </Link>
                ))}
            </div>
            {isSignedIn ? (
                <UserButton afterSignOutUrl="/sign-in" />
            ) : (
                <Link href="/sign-in">Sign In</Link>
            )} 
        </div>
    </div>
  )
}

export default Topbar