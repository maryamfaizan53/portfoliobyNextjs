import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='absolute top-10 left-10 h-60 w-60 rounded-full overflow-hidden drop-shadow-lg '>
    <Image 
      src="/mask girl.jpg"  // Correct path without '/my-app/public/'
      alt="profile photo"
      layout="fill" 
      objectFit="cover"
    />
  </div>
  )
}

export default Logo