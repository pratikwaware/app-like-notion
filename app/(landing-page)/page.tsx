import { Menu } from '@/components/navbar/_components/menu'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex items-center'>
      <Navbar />
      <Menu />
    </div>
  )
}

export default LandingPage
