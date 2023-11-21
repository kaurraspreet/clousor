import React from 'react'

type Props = { className: string }

export const ChevronIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      viewBox='0 0 5 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0.128 5.868L3.032 3.108L0.128 0.36H1.508L4.412 3.108L1.508 5.868H0.128Z' />
    </svg>
  )
}

export const SoftChevronIcocn = ({ className }: Props) => {
  return (
    <svg
      className={`text-gray-500 flex-non ${className}`}
      viewBox='0 0 20 20'
      fill='currentColor'
      aria-hidden='true'
    >
      <path
        fill-rule='evenodd'
        d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
        clip-rule='evenodd'
      />
    </svg>
  )
}

export const MenuIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  )
}

export const CloseIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}
