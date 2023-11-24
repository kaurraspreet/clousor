import { Facebook, Instagram, LinkedIn, Twitter } from './SvgIcon'

export default function Footer () {
  const companylinks = [
    {
      name: 'About Us',
      href: '/',
      id: 'about'
    },
    {
      name: 'Portfolio',
      href: '/',
      id: 'portfolio'
    },
    {
      name: 'Contact Us',
      href: '/contact-us',
      id: 'contact'
    },
    {
      name: 'Blogs',
      href: '/blogs',
      id: 'blog'
    }
  ]

  const servicelinks = [
    {
      name: 'Web Development',
      href: '/',
      id: 'web-development'
    },
    {
      name: 'Web Design',
      href: '/',
      id: 'web-design'
    },
    {
      name: 'UI/UX Design',
      href: '/',
      id: 'ui-ux-design'
    },
    {
      name: 'SEO',
      href: '/',
      id: 'seo'
    }
  ]

  const additionallinks = [
    {
      name: 'FAQ',
      href: '/',
      id: 'faq'
    },
    {
      name: 'Terms & Conditions',
      href: '/',
      id: 'terms-conditions'
    },
    {
      name: 'Privacy Policy',
      href: '/',
      id: 'privacy-policy'
    }
  ]

  const socialMedialinks = [
    {
      name: 'Facebook',
      href: '/facebook',
      id: 'facebook',
      icon: (
        <Facebook className='fill-gray-400 inline hover:fill-white w-7 h-7 ' />
      )
    },
    {
      name: 'LinkedIn',
      href: '/linkedIn',
      id: 'linkedIn',
      icon: (
        <LinkedIn className='fill-gray-400 inline hover:fill-white w-7 h-7 ml-2' />
      )
    },
    {
      name: 'Instagram',
      href: '/instagram',
      id: 'instagram',
      icon: (
        <Instagram className='fill-gray-400 inline hover:fill-white w-7 h-7 ml-2' />
      )
    },
    {
      name: 'Twitter',
      href: '/twitter',
      id: 'twitter',
      icon: (
        <Twitter className='fill-gray-400 inline hover:fill-white w-7 h-7 ml-2' />
      )
    }
  ]

  return (
    <footer className='bg-black pt-12 pb-8 lg:px-16 md:px-8 px-5'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>Services</h2>
          <ul className='space-y-2'>
            {servicelinks.map(({ name, href, id }) => (
              <li key={id} className='list-none'>
                <a
                  href={href}
                  className='text-gray-400 hover:text-white text-base'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>Company</h2>
          <ul className='space-y-2'>
            {companylinks.map(({ name, href, id }) => (
              <li key={id} className='list-none'>
                <a
                  href={href}
                  className='text-gray-400 hover:text-white text-base'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>
            Additional Links
          </h2>
          <ul className='space-y-2'>
            {additionallinks.map(({ name, href, id }) => (
              <li key={id} className='list-none'>
                <a
                  href={href}
                  className='text-gray-400 hover:text-white text-base'
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex lg:items-center flex-col items-start space-y-2 lg:justify-center'>
          <a href='javascript:void(0)'>
            <img
              src='https://readymadeui.com/readymadeui-light.svg'
              alt='logo'
              className='w-60'
            />
          </a>
          <p className='text-gray-400 text-xs text-center'>
            Think out of the box, then redesign the box.
          </p>
        </div>
      </div>
      <hr className='my-8 border-gray-800 container mx-auto' />
      <div className='container mx-auto sm:flex sm:items-center sm:justify-between sm:flex-row'>
        <p className='text-gray-400 text-sm sm:order-1'>
          © 2023
          <a
            href='https://readymadeui.com/'
            target='_blank'
            className='hover:underline mx-1'
          >
            Clousor.
          </a>
          All Rights Reserved.
        </p>
        <div className='flex space-x-4 max-sm:mt-4'>
          {socialMedialinks.map(({ name, href, icon, id }) => (
            <a
              href={href}
              key={id}
              className='text-gray-400 hover:text-white text-base'
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
