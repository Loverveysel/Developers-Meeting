import React from 'react'

export default function loading() {
  return (
    <div className='bg-base-100 w-screen h-screen'>
      <div className='absolute flex top-1/2 right-1/2 translate-x-1/2 translate-y-1/2'>
        <img className='rounded-full animate-ping m-auto border-4 border-white' src="/icon.ico" alt="" height={150} width={150} />
      </div>
    </div>
  )
}
