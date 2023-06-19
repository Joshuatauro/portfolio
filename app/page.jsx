import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { cherry } from './fonts'
import Circle from '@/components/Circle'
import Project from '@/components/Project'
export default function Home() {

  const projects = [
    {
      title: "Hive!",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur et, ex aut, totam, autem molestiae eius ratione deserunt fugit id fugiat veniam sapiente impedit a ea optio ipsum quasi ullam.",
      isWinner: true
    },
    {
      title: "Ecommed",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, maxime debitis voluptatum sapiente quisquam quam tempora ratione laboriosam fugiat nobis. Numquam fuga eveniet magnam ullam soluta iusto perferendis ipsa possimus?"
    }
  ]

  return (
    <main className="bg- text-primary min-h-screen">
      <div className=" w-2/4 pt-5 m-auto relative">
        <Navbar />
        {/* Landing Section */}
        <div className="mt-32">
          <p className='font-medium text-fade-primary text-sm'>Hey there, i'm</p>
          <h1 className={`${cherry.className} heading-text text-cta`}>Joshua Tauro.</h1>
          <p className='para-text mt-2'>an upcoming <span className='text-primary'>Fullstack developer</span>, who is currently pursuing his Bachelors of Technology from <span className='text-primary'>Siddaganga Institute of Technology (SIT)</span> in Computer Science Engineering.</p>
          <p className='para-text mt-3'>I currently spend quite a lot of my free time dabbling around with different technologies that i've always wanted to learn(and finally coming around to actually learning them). Some of those technologies are <span className='text-primary'>GSAP, ThreeJS</span> and i guess soon enough <span className='text-primary'>Redux</span></p>
          <div className="mt-5 font-medium pb-1 uppercase hover:text-cta transition-all duration-200 border-b border-cta w-fit">
            <Link href="/">More about me</Link>
          </div>
            
        </div>

        {/* Projects Section */}
        <div className="mt-32">
          <h1 className={`${cherry.className} heading-text`}>My Projects.</h1>
          <p className='para-text mt-2'>I've always loved trying to build new projects and challenge myself in new ways, these are some of the few projects that I've built and most proud of. Feel free to check them out, and if its something you liked, a Github Star would be ever so appreciated :)</p>
          <p className='para-text my-5'>Feel free to check my <span className='text-white'>skills and certifications</span> , <a href="" className='text-base uppercase font-medium underline underline-offset-4 decoration-cta text-white hover:text-cta'>Here</a></p>
          {
            projects.map(({title, desc, isWinner}) => <Project title={title} desc={desc} isWinner={isWinner} />)
          }
          <p className='font-medium text-lg text-fade-primary'>Feel free to check out my complete list of all projects {' '}
          <a href="" className='font-medium underline underline-offset-4 decoration-cta text-white hover:text-cta duration-200 transition-all text-base'>HERE</a></p>
        </div>
        
        <div className="mt-32 pb-32">
          <h1 className={`${cherry.className} heading-text text-primary`}>Contact Me</h1>
          <p className="para-text mt-1 mb-8">As a passionate college student, I'm eager to connect and explore opportunities in my field. Whether it's a collaboration request, internship, or simply a chance to network, I'm excited to hear from you :)</p>
          <a href="mailto:joshuatauro45@gmail.com" className={`uppercase text-3xl font-medium decoration-cta underline underline-offset-4 duration-200 transition-all hover:text-cta `}>joshuatauro45@gmail.com</a>
        </div>
      </div>
      
    </main>
  )
}
