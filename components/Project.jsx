import { cherry } from '../app/fonts'
import { BsTrophy } from 'react-icons/bs'
import Badge from './Badge'
import Link from 'next/link'

export default function Project({title, desc, isWinner, imgURL, url}) {

    return(
        <Link href={`/${url}`} className="">
            <div className="w-full rounded-md px-5 py-5 group border-2 border-fade-primary bg-secondary hover:border-cta transition-all duration-200 mb-4 cursor-pointer">  
                <div className=" overflow-hidden rounded-lg">
                    <img src={imgURL} className=' group-hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                </div>
                <div className="flex items-center mt-5">
                    <h1 className={`font-bold text-2xl ${cherry.className} group-hover:text-cta duration-400 transition-all mr-2`}>{title}</h1>
                    {isWinner && <Badge icon={<BsTrophy strokeWidth={1.05} />} color="cta" text={"Hackathon Winner"} textColor={"text-cta"} bgColor={"bg-cta"} borderColor={"border-cta"} />}
                </div>
                <p className=' text-fade-primary text-md font-medium'>{desc}</p>
                <p className='mt-5 font-medium uppercase underline text-sm decoration-cta underline-offset-4 hover:text-cta duration-200 transition-all'>Know more!</p>
            </div>
        </Link>
    )
}