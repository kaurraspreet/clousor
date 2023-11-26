import Banner from '@/components/home/Hero'
import Portfolio from '@/components/home/Portfolio'
import Testimonials from '@/components/home/Testimonials'

export default function Home () {
  return (
    <div>
      <main className='max-w-screen-2xl flex flex-col mx-auto min-h-screen items-center justify-between '>
        <Banner />
        <Testimonials />
        <Portfolio />
      </main>
    </div>
  )
}
