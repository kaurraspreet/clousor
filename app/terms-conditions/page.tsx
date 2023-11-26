import CommonHeader from '@/components/CommonHeader'

export default function TermsConditions () {
  return (
    <>
      <CommonHeader
        title='Terms and Conditions'
        subtitle="Understanding the Guidelines: Clousor's Website Development Services"
      />

      <div className='py-24 sm:py-32 lg:px-16 md:px-8 px-5'>
        <div className='mx-auto container'>
          <h2 className='text-2xl font-bold mb-4'>1. Acceptance of Terms</h2>

          <p className='mb-4'>
            By using Clousor&apos;s website development services, you agree to
            abide by these Terms and Conditions. If you do not agree with any
            part of these terms, please refrain from using our services.
          </p>

          <h2 className='text-2xl font-bold mb-4'>2. Service Overview</h2>

          <p className='mb-4'>
            Clousor provides website development services tailored to meet your
            specific needs. Our services are subject to the terms outlined in
            this document.
          </p>

          <h2 className='text-2xl font-bold mb-4'>3. User Responsibilities</h2>

          <p className='mb-4'>
            Users are responsible for maintaining the confidentiality of their
            accounts and are liable for any activities conducted through their
            accounts. Any unauthorized use must be reported immediately to
            Clousor.
          </p>

          <h2 className='text-2xl font-bold mb-4'>4. Billing and Payment</h2>

          <p className='mb-4'>
            Clients agree to pay fees as outlined in their service agreements.
            Failure to pay fees may result in service suspension or termination.
          </p>

          <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>

          <p className='mb-8'>
            For inquiries or concerns related to these Terms and Conditions,
            please contact us at{' '}
            <a href='mailto:contact@clousor.com' className='text-blue-500'>
              contact@clousor.com
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}
