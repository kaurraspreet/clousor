import Banner from '@/components/home/Banner'
import Portfolio from '@/components/home/Portfolio'

export default function Home () {
  return (
    <div>
      <main className='max-w-screen-2xl flex flex-col mx-auto min-h-screen  items-center justify-between '>
        <Banner/>
        <Portfolio />
      </main>
    </div>
  )
}
