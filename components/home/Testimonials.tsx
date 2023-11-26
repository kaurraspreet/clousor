import { Male, Female, Quote } from '../SvgIcon'
export default function Testimonials () {
  const reviews = [
    {
      id: 1,
      name: 'Annie',
      profile: 'Sr. Manager',
      review:
        'faceSynth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90&apos;s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic icelandbook',
      icon: <Female className='h-8 w-8' />
    },
    {
      id: 2,
      name: 'David',
      profile: 'Retailer',
      review:
        'faceSynth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90&apos;s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic icelandbook',
      icon: <Male className='h-8 w-8' />
    },
    {
      id: 3,
      name: 'Sanna',
      profile: 'Artist',
      review:
        'faceSynth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90&apos;s microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic icelandbook',
      icon: <Female className='h-8 w-8' />
    }
  ]

  return (
    <section className='text-gray-600'>
      <div className='container py-24 mx-auto mb-24'>
        <span className='uppercase text-base text-blue font-medium'>
          Testimonials
        </span>
        <h1 className='text-6xl font-semibold title-font text-gray-900 mb-20'>
          What Our Happy Client <br />
          Say
        </h1>
        <div className='flex flex-wrap relative top-20'>
          <div className='bg-gray-100/60 rounded-tl-[4rem] h-96 w-5/6 absolute right-0 bottom-20 z-[-1]'></div>
          {reviews.map(({ name, profile, icon, review, id }) => (
            <>
              <div className='p-4 md:w-1/3 w-full ' key={id}>
                <div className='h-full shadow bg-white p-8 rounded-lg'>
                  <Quote className=' w-5 h-5' />
                  <p className='leading-relaxed mb-6'>{review}</p>
                  <a className='inline-flex items-center'>
                    {icon}
                    <span className='flex-grow flex flex-col pl-4'>
                      <span className='title-font font-medium text-gray-900'>
                        {name}
                      </span>
                      <span className='text-gray-500 text-sm uppercase'>
                        {profile}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
