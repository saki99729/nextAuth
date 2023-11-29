import React from 'react'
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { options } from '../api/auth/[...nextauth]/options';

async function  Navigation() {
    const session = await getServerSession(options)
  return (
    <div >
      <header className='bg-gray-600 text-gray-100'>
        <nav className='flex justify-between items-center w-full px-10 py-4'>
        <div>My Site</div>
        <div className="flex gap-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/CreateUser"}>Create User</Link>
            <Link href={"/ClientMember"}>Client Member</Link>
            <Link href={"/Member"}>Member</Link>
            <Link href={"/PublicPage"}>public</Link>
            {session?
            (<Link href={"/api/auth/signout?callbackUrl=/"}>Log Out</Link>)
            :(<Link href={"/api/auth/signin"}>Log In</Link>)}       
             </div>
        </nav>
      </header>
    </div>
  )
}

export default Navigation
