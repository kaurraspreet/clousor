import CommonHeader from '@/components/CommonHeader'
import { SoftChevronIcocn } from '@/components/SvgIcon'
export default function Faq () {
  const faq = [
    {
      id: '1',
      question: 'What is a SAAS platform?',
      answer:
        ' SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.'
    },
    {
      id: '2',
      question: 'What is a SAAS platform?',
      answer:
        ' SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.'
    },
    {
      id: '3',
      question: 'What is a SAAS platform?',
      answer:
        ' SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.'
    },
    {
      id: '4',
      question: 'What is a SAAS platform?',
      answer:
        ' SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.'
    },
    {
      id: '5',
      question: 'What is a SAAS platform?',
      answer:
        ' SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.'
    },
    {
      id: '6',
      question: 'What is a SAAS platform?',
      answer:
        ' SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality.'
    }
  ]
  return (
    <>
        <CommonHeader title='FAQ' subtitle='Any Questions? Look Here' />
        <div className='max-w-screen-lg mx-auto px-5 bg-white lg:px-16 md:px-8 pb-20'>
          <div className='grid divide-y divide-neutral-200 mx-auto my-12'>
            {faq.map(({ question, answer, id }) => (
              <div className='py-5' key={id}>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> {question}</span>
                    <span className='transition group-open:rotate-180'>
                      <SoftChevronIcocn className='h-6 w-6 fill-black' />
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    {answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}
