import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Nav'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className='bg-gray-100'>
      <Navigation/>
      <div className='m-2'>
        {children}
      </div>
        </body>
    </html>
  )
}
