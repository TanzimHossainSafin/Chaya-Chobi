"use client";
import AuthLinks from "./AuthLinks";
import { useSession } from "next-auth/react";
export default function Profile() {
    const {data:session,status} = useSession();
    return (
        <div>
           {status=="authenticated" &&(<div>
            {session.user?.image && (
        
        <img
          src={session.user.image}
          alt="Profile"
          width={40}
          height={40}
          style={{ borderRadius: "50%" }}
        />
      )}
            <h2 className="text-sm font-bold">{session.user?.name}</h2>
            <h2 className="text-sm font-bold">{session.user?.email}</h2>
            </div>)}
        </div>
    )
}
