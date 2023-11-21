import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/Footer'

export default function Home () {
  return (
    <div>
      <Navbar />
      <main className='max-w-screen-2xl flex flex-col mx-auto min-h-screen  items-center justify-between '>
        {/* <div className='z-10 w-full items-center justify-between text-sm lg:flex'></div> */}
      </main>
      <Footer />
    </div>
  )
}
