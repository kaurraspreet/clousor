import Image from 'next/image'
import CommonHeader from '@/components/CommonHeader'

export default function About () {
  const blogs = [
    {
      id: '1',
      heading: 'Demystifying Cloud Computing: A Primer for Beginners',
      excerpt:
        'Uncover the essentials of cloud computing in our latest blog. From its fundamental concepts to real-world applications, this primer is your gateway to understanding the transformative power of cloud technology.',
      date: 'Mar 16, 2020',
      tag: ['Cloud Computing', 'IT']
    },
    {
      id: '2',
      heading: 'Navigating Cybersecurity Challenges in a Digital Era',
      excerpt:
        'Explore the intricate landscape of cybersecurity and learn practical strategies to safeguard your digital assets. Our blog delves into the latest threats, preventive measures, and the importance of a proactive cybersecurity stance.',
      date: 'Aug 5, 2020',
      tag: ['Cybersecurity', 'IT']
    },
    {
      id: '3',
      heading:
        'Embracing AI in Business: Practical Applications and Future Prospects',
      excerpt:
        'Dive into the realm of Artificial Intelligence and discover how businesses are leveraging AI for innovation. From practical applications to future prospects, this blog sheds light on the transformative impact of AI technologies on industries worldwide.',
      date: 'Oct 26, 2020',
      tag: ['Business', 'IT']
    }
  ]

  return (
    <>
      <CommonHeader
        title='Tech Insights & Innovations'
        subtitle='Explore the Latest in IT Solutions, Trends, and Expert Perspectives'
      />
      <div className='bg-white py-24 sm:py-32 lg:px-16 md:px-8 px-5 '>
        <div className='mx-auto container'>
          <p className='text-lg text-center leading-8 text-gray-600'>
            Discover a wealth of knowledge and inspiration in our blog section.
            From cutting-edge tech trends to expert insights, our bite-sized
            articles offer a glimpse into the rapidly evolving IT landscape.
            Stay ahead of the curve with concise updates and thought-provoking
            content designed for both tech enthusiasts and industry
            professionals. Dive into our blogs to explore the ever-changing
            world of information technology.
          </p>

          <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:grid-cols-3'>
            {/* {blogs.map({id, heading,excerpt,tag})=>(
             */}
            {blogs.map(({ id, heading, excerpt, tag, date }) => (
              <article
                key={id}
                className='flex max-w-xl flex-col gap-5 items-start'
              >
                <div className='relative'>
                  <Image
                    src='/images/trading.avif'
                    width={500}
                    height={500}
                    alt=''
                  />

                  <div className='absolute bottom-0 flex p-3  w-full '>
                    <div className='flex items-center gap-x-4 text-xs'>
                      {tag.map((tag, i) => (
                        <a
                          href='#'
                          key={i}
                          className='rounded-full bg-gray-50/70 px-3 py-1.5 text-s font-medium text-gray-600 hover:bg-gray-100'
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='group relative'>
                  <time className='text-gray-600 text-xs font-medium rounded-full'>
                    {date}
                  </time>
                  <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                    <a href='#'>
                      <span className='absolute inset-0'></span>
                      {heading}
                    </a>
                  </h3>
                  <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                    {excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
