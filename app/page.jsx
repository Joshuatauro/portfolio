import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { cherry } from './fonts'
import Circle from '@/components/Circle'
export default function Home() {
  return (
    <main className="bg-main text-primary min-h-screen">
      <div className=" w-2/4 pt-5 m-auto relative">


        <Navbar />
        {/* Landing Section */}
        <div className="mt-32">
          <p className='font-medium text-fade-primary text-sm'>Hey there, i'm</p>
          <h1 className={`${cherry.className} font-bold text-cta text-6xl`}>Joshua Tauro.</h1>
          <p className='font-medium text-fade-primary text-lg mt-2'>an upcoming <span className='text-primary'>Fullstack developer</span>, who is currently pursuing his Bachelors of Technology from <span className='text-primary'>Siddaganga Institute of Technology (SIT)</span> in Computer Science Engineering.</p>
          <p className='font-medium text-fade-primary text-lg mt-3'>I currently spend quite a lot of my free time dabbling around with different technologies that i've always wanted to learn(and finally coming around to actually learning them). Some of those technologies are <span className='text-primary'>GSAP, ThreeJS</span> and i guess soon enough <span className='text-primary'>Redux</span></p>
          <div className="mt-5 font-medium pb-1 uppercase hover:text-cta transition-all duration-200 border-b border-cta w-fit">
            <Link href="/">More about me</Link>
          </div>
            
        </div>

        {/* Projects Section */}
        <div className="mt-32">
          <h1 className={`${cherry.className} font-bold text-white text-6xl`}>My Projects.</h1>
          <p className='font-medium text-fade-primary text-lg mt-2'>I've always loved trying to build new projects and challenge myself in new ways, these are some of the few projects that I've built and most proud of. Feel free to check them out, and if its something you liked, a Github Star would be ever so appreciated :)</p>
          
        </div>
        
       
      </div>
      
    </main>
  )
}
