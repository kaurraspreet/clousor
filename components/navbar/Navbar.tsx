'use client'

import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'
import Button from '../ui/Button'
import { CloseIcon, MenuIcon } from '../SvgIcon'

export default function Navbar () {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const pathname = usePathname()
  useEffect(() => setOpen(false), [pathname])

  const closeMobileMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        closeMobileMenu();
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const navlinks = [
    {
      name: 'Services',
      id: 'service',
      href: '/'
    },
    {
      name: 'Products',
      href: '/',
      id: 'product'
    },
    {
      name: 'About',
      href: '/',
      id: 'about'
    },
    {
      name: 'Blogs',
      href: '/blogs',
      id: 'blog'
    }
  ]
  return (
    <header className='bg-white w-full py-6 lg:px-16 md:px-8 px-5 top-0 sticky z-40 shadow'>
      <nav
        className='mx-auto flex w-full container items-center justify-between '
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5 text-3xl font-bold'>
            <span className='sr-only'>clousor</span>
            Clousor
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            onClick={() => setOpen(pre => !pre)}
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
          >
            <span className='sr-only'>Open main menu</span>
            <MenuIcon className='w-8 h-8 stroke-black stroke-[1.6px]' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navlinks.map(({ name, href, id }) => (
            <li key={id} className='list-none'>
              <a
                href={href}
                className='text-sm font-semibold leading-6 text-gray-900 md:hover:text-blue'
              >
                {name}
              </a>
            </li>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Button
            text='Contact Us'
            onClick={() => router.push('/contact-us')}
            className='gap-2 flex items-center bg-black text-white rounded-md font-semibold'
          />
        </div>
        {/* mobile menu */}
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed top-0 left-0 bottom-0 z-10 w-full h-full lg:backdrop-blur-none backdrop-blur-xl bg-[#ffffffc2] grid place-content-center'
        >
          <div className='lg:hidden' role='dialog' aria-modal='true'>
            <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto py-6 md:px-8 px-5'>
              <div className='flex items-center justify-between'>
                <a href='#' className='-m-1.5 p-1.5 text-3xl font-bold'>
                  <span className='sr-only'>Your Company</span>
                  Clousor
                </a>
                <button
                  type='button'
                  onClick={() => setOpen(pre => !pre)}
                  className='-m-2.5 rounded-md p-2.5 text-gray-700'
                >
                  <span className='sr-only'>Close menu</span>
                  <CloseIcon className='w-6 h-6' />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <ul className='text-center'>
                  {navlinks.map(({ name, href, id }) => (
                    <li key={id}>
                      <Link
                        onClick={() => setOpen(false)}
                        href={href}
                        className='block py-3 pl-3 pr-4 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue'
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
