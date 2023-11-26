import CommonHeader from '@/components/CommonHeader'

export default function PrivacyPolicy () {
  return (
    <>
      <CommonHeader
        title='Clousor Privacy Policy'
        subtitle='Your Trust, Our Commitment'
      />

      <div className='py-24 sm:py-32 lg:px-16 md:px-8 px-5'>
        <div className='mx-auto container'>
          <p className='mb-4'>**Effective Date: 2023-11-26**</p>

          <h2 className='text-2xl font-bold mb-4'>Welcome to Clousor</h2>

          <p className='mb-8'>
            Thank you for choosing Clousor for your website development needs.
            This Privacy Policy is designed to inform you about how we collect,
            use, and safeguard your personal information in the course of
            providing our website development services.
          </p>

          <h2 className='text-2xl font-bold mb-4'>Information We Collect</h2>

          <h3 className='text-xl font-bold mb-2'>Personal Information</h3>

          <p className='mb-4'>
            We collect essential personal information to enhance our service
            delivery:
          </p>

          <ul className='list-disc pl-8 mb-8'>
            <li>Your name, company name, and contact details.</li>
            <li>Payment details and billing address.</li>
            <li>Correspondence records and communication details.</li>
          </ul>

          <h3 className='text-xl font-bold mb-2'>Website User Information</h3>

          <p className='mb-8'>
            For visitors to our website, we collect non-personal information
            such as IP addresses, browser details, and device information.
          </p>

          <h2 className='text-2xl font-bold mb-4'>
            How We Use Your Information
          </h2>

          <p className='mb-4'>
            We utilize the collected information for the following purposes:
          </p>

          <ul className='list-disc pl-8 mb-8'>
            <li>
              Delivering high-quality website development services tailored to
              your needs.
            </li>
            <li>
              Responding to inquiries, providing support, and delivering
              important updates.
            </li>
            <li>Efficiently processing payments and managing invoices.</li>
          </ul>

          <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>

          <p className='mb-8'>
            For privacy-related inquiries or concerns, please do not hesitate to
            contact our dedicated privacy team at{' '}
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
