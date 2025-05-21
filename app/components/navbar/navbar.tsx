"use client"
import Link from 'next/link'
import AuthLinks from '../AuthLinks'
import Profile from '../profile'
import { useSession } from 'next-auth/react'

export default function Navbar() {
    const { data: session } = useSession();
    return (
        <nav className="bg-slate-800 text-white py-4 px-6 shadow-md ">
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex gap-6 items-center'>
                    <Link href="/" className="text-lg font-semibold hover:text-blue-400 transition duration-200 text-lg">Home</Link>
                    {session && session.user && (   
                        <Link href='/moviesuggestion' className="hover:text-blue-400 transition duration-200 font-bold ">Suggestion</Link>
                    )}
                    {session && session.user && (
                        <Link href='/movieadd' className="hover:text-blue-400 transition duration-200 font-bold ">MovieAdd</Link>
                    )}
                    {session && session.user && (
                        <Link href='/moviePlatform' className="hover:text-blue-400 transition duration-200 font-bold ">Platform</Link>
                    )}
                </div>
                <div className='flex items-center gap-4'>
                    <AuthLinks />
                    <div className="border-l border-slate-600 h-6 mx-2"></div>
                    <Profile />
                </div>
            </div>
        </nav>
    )
}