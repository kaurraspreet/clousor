import {
  Email,
  Phone,
  Follow,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter
} from '@/components/SvgIcon'

export default function ContactBar () {
  const socialMedialinks = [
    {
      name: 'Facebook',
      href: '/facebook',
      id: 'facebook',
      icon: (
        <Facebook className='fill-black inline hover:fill-gray-800 w-7 h-7 ' />
      )
    },
    {
      name: 'LinkedIn',
      href: '/linkedIn',
      id: 'linkedIn',
      icon: (
        <LinkedIn className='fill-black inline hover:fill-gray-800 w-7 h-7 ml-2' />
      )
    },
    {
      name: 'Instagram',
      href: '/instagram',
      id: 'instagram',
      icon: (
        <Instagram className='fill-black inline hover:fill-gray-800 w-7 h-7 ml-2' />
      )
    },
    {
      name: 'Twitter',
      href: '/twitter',
      id: 'twitter',
      icon: (
        <Twitter className='fill-black inline hover:fill-gray-800 w-7 h-7 ml-2' />
      )
    }
  ]
  return (
    <div className='container mx-auto p-5 sm:p-0 md:p-8 lg:px-16'>
      <div className='bg-white  px-6 py-12 shadow-md rounded-lg -mt-20 mb-10'>
        <div className='grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-3 justify-items-center'>
          <div className='flex flex-col items-center text-center'>
            <span className='inline-block p-3 text-blue-500 rounded-full bg-blue-80 '>
              <Email className='h-6 w-6' />
            </span>

            <h2 className='mt-4 text-lg font-medium text-gray-800 '>Email</h2>
            <p className='mt-2 text-gray-500 '>
              Our friendly team is here to help.
            </p>
            <p className='mt-2 text-black font-semibold hover:text-blue-500 cursor-pointer'>
              contact@clousor.com
            </p>
          </div>

          <div className='flex flex-col items-center text-center '>
            <span className='inline-block p-3 text-blue-500 rounded-full bg-blue-80 '>
              <Phone className='h-6 w-6' />
            </span>

            <h2 className='mt-4 text-lg font-medium text-gray-800 '>Phone</h2>
            <p className='mt-2 text-gray-500 '>Mon-Fri from 8am to 5pm.</p>
            <p className='mt-2 text-black font-semibold hover:text-blue-500 cursor-pointer'>
              +1 (555) 000-0000
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <span className='inline-block p-3 text-blue-500 rounded-full bg-blue-80 '>
              <Follow className='h-6 w-6' />
            </span>

            <h2 className='mt-4 text-lg font-medium text-gray-800 '>
              Follow Us
            </h2>
            <p className='mt-2 text-gray-500 '>
              Let&apos;s catch up by social media
            </p>
            <div className='mt-2'>
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
        </div>
      </div>
    </div>
  )
}
