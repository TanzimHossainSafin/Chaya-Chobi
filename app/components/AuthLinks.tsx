"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthLinks() {
  //client side session 
  const { data: session } = useSession();
  return (
    <div >
      {session && session.user ? (
        <button onClick={() => signOut()} className="flex items-center justify-end py-2 px-2 pl-3 gap-4 cursor-pointer  text-white rounded-md bg-red-500 hover:bg-red-600">Logout</button>
      ) : (
        <button className="flex items-center justify-end py-2 px-2 pl-3 gap-4 cursor-pointer  text-white rounded-md bg-blue-500 hover:bg-blue-600" onClick={() => signIn() }>Login</button>
      )}
    </div>
  );
}