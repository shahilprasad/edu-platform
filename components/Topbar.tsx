import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'
import React from 'react'

const Topbar = () => {
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
    </div>
  )
}

export default Topbar