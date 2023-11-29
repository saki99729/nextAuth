"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

function ClientMember() {
    const {data:session}=useSession({
        required:true,
        onUnauthenticated(){
            redirect("api/auth/signin?callbackUrl=/ClientMember")
        }

    })
  return (
    <div>
      <h1>Client Member</h1>
    </div>
  )
}

export default ClientMember
