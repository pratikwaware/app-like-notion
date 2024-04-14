'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { X, AlignJustify } from 'lucide-react'
import Link from 'next/link'

const ActionButtons = () => {
  return (
    <div className='pr-2'>
      <div className='items-center justify-center flex'>
        <div className='flex xl:space-x-4'>
            <Link
                href={"/"} 
                className='hidden lg:flex items-center'
            >
                <div>
                    Request Demo
                </div>
            </Link>

            <div className='font-thin lg:flex items-center hidden'>|</div>

            <div className='flex lg:space-x-4 items-center pr-4'>
                <div>
                    <Button
                        className='hidden lg:flex items-center border-none text-md'
                        variant={'outline'}
                    >
                        Log In
                    </Button>
                </div>
                <div>
                    <Button
                        className='hidden lg:flex items-center border-none text-md'
                    >
                        Get Mahiti free
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ActionButtons
