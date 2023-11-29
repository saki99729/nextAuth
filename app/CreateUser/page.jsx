import React from 'react'
import {withAuth} from "next-auth/middleware"
import { NextResponse } from 'next/server'

function CreateUser() {
  return (
    <div>
      Only Admins~!
    </div>
  )
}

export default CreateUser
