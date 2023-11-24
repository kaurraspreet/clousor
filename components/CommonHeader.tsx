'use client'
import React from 'react'
interface Props  {
  title: string
  subtitle: string
  className?:string
}

const CommonHeader = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`bg-black py-20 lg:px-16 md:px-8 px-5 ${className}`}>
      <div className='container mx-auto text-white'>
        <h3 className='font-semibold text-5xl pb-2'>{title}</h3>
        <p className='text-lg font-light'>{subtitle}</p>
      </div>
    </div>
  )
}

export default CommonHeader
