"use client"
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
    <div className='bg-red-600 h-14 w-full flex items-center justify-center content-center'>
        
            
              
             <Image
      src="/my-app/public/logo.png"
      alt="User Avatar"
      width={100}
      height={100}
      className="rounded-full justify-start items-start"
    />
    <ul>
       <li>
         <h4 >All right reserved | by Maryam Faizan</h4>
         </li>
         </ul>
    </div>
    </>
  )
}

export default Footer
  
  