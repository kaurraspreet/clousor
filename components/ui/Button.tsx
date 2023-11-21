'use client'

import clsx from 'clsx'
import React from 'react'

type Props = {
  className?: string
  varient?: 'secondary' | 'primary'
  text: string
  size?: 'sm' | 'lg' | 'md'
  icon?: React.ReactNode
  iconPosition?: 'before' | 'after'
  onClick: () => void
  disabled?: boolean
}

const Button = ({
  onClick,
  text,
  varient,
  size,
  className,
  icon,
  iconPosition = 'before',
  disabled
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'border border-black px-8 py-2 rounded-lg disabled:opacity-25 hover:bg-black duration-300 cursor-pointer hover:text-white',
        className
      )}
      disabled={disabled}
    >
      {iconPosition === 'before' && icon}
      {text}
      {iconPosition === 'after' && icon}
    </button>
  )
}

export default Button
