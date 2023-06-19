import { cherry } from '../app/fonts'
import { BsTrophy } from 'react-icons/bs'
import Badge from './Badge'

export default function Project({title, desc, isWinner}) {

    return(
        <div className="w-full rounded-md px-5 py-5 group border-2 border-fade-primary bg-secondary hover:border-cta transition-all duration-200 mb-4 cursor-pointer">
            <div className="flex items-center">
                <h1 className={`font-bold text-2xl ${cherry.className} group-hover:text-cta duration-200 transition-all `}>{title}</h1>
                {isWinner && <Badge icon={<BsTrophy strokeWidth={1.05} />} color="cta" text={"Hackathon Winner"} />}
            </div>
            <p className=' text-fade-primary text-md font-medium'>{desc}</p>
            <p className='mt-5 font-medium uppercase underline text-sm decoration-cta underline-offset-4 hover:text-cta duration-200 transition-all'>Know more!</p>
        </div>
    )
}