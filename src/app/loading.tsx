import React from 'react'

export default function loading() {
  return (
    <div className='m-auto bg-base-100'>
      <div className='flex-grow m-auto'>
        <img className='animate-pulse m-auto' src="/icon.ico" alt="" height={50} width={50} />
      </div>
    </div>
  )
}
