import { HalfCircle, DotShape1, DotShape2 } from '@/components/SvgIcon'
import ContactForm from '@/components/contact/form'
import ContactBar from '@/components/contact/Contactbar'
import OurProcess from '@/components/contact/TimeLine'
import CommonHeader from '@/components/CommonHeader'

export default function Contact () {
  return (
    <>
      <section className='mb-10 md:mb-12 lg:mb-16'>
        <CommonHeader
          title='Get in touch'
          subtitle='We would love to hear from you'
          className='pb-40'
        />
        <ContactBar />

        <div className='relative z-10 overflow-hidden bg-white dark:bg-dark py-10 lg:py-20 lg:px-16 md:px-8 md:pt-0 px-5'>
          <div className='container mx-auto'>
            <div className='flex flex-wrap -mx-4 gap-6 lg:gap-0'>
              <div className='w-full px-4 lg:w-1/2 xl:w-6/12 lg:pr-20'>
                {/* <div className='container px-6 mx-auto'> */}
                  <OurProcess />
                {/* </div> */}
              </div>
              <div className='w-full px-4 lg:w-1/2 xl:w-6/12'>
                <div className='relative lg:p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12 mr-12 space-y-12'>
                  <h2 className='mx-8 lg:mx-0 xl:mx-8 text-3xl lg:text-5xl font-semibold pt-8 lg:pt-0'>
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
