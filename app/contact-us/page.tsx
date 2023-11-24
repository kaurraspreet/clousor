import {
  Email,
  Phone,
  HalfCircle,
  DotShape1,
  DotShape2
} from '@/components/SvgIcon'
import ContactForm from '@/components/contact/form'
import ContactBar from '@/components/contact/Contactbar'
import OurProcess from '@/components/contact/TimeLine'

export default function Contact () {
  return (
    <>
      <section>
        <div className='bg-black pt-20 pb-40 lg:px-16 md:px-8 px-5'>
          <div className='container mx-auto text-white'>
            <h3 className='font-semibold text-5xl pb-2'>Get in touch</h3>
            <p className='text-lg font-light'>
              We would love to hear from you.
            </p>
          </div>
        </div>
        <ContactBar />

        {/* form section start */}
        <div className='relative z-10 overflow-hidden bg-white dark:bg-dark py-20 lg:py-[120px] lg:px-16 md:px-8 px-5'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap -mx-4 '>
              <div className='w-full px-4 lg:w-1/2 xl:w-6/12'>
                <div className='container px-6 mx-auto'>
                  <OurProcess />
                </div>
              </div>
              <div className='w-full px-4 lg:w-1/2 xl:w-6/12'>
                <div className='relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12 mr-12 space-y-12'>
                  <h2 className='mx-8 text-5xl font-semibold'>
                    Contact us and unleash your idea
                  </h2>
                  <ContactForm />
                  <div>
                    <span className='absolute -top-10 -right-9 z-[-1]'>
                      <HalfCircle />
                    </span>
                    <span className='absolute -right-10 top-[90px] z-[-1]'>
                      <DotShape1 />
                    </span>
                    <span className='absolute -left-7 -bottom-7 z-[-1]'>
                      <DotShape2 />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
