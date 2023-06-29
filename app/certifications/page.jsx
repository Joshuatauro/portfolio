import { cherry } from "../fonts";

export default function Certifications({isWinner}) {
    const certs = [
        {
            url: "/google.png",
            title: "Hackathon Winner",
            desc: "Won the institute level round of the hackathon conducted by GFG, Google and AMD \n\nQualified for South Regionals and placed among the top 300 teams in the country"
        },
        {
            url: "/wie.png",
            title: "Hackathon Winner",
            desc: 'Won first place at Hack-0-smart, a 24 hour national level hackathon conducted by Siddaganga Institute of Technology'
        },
        {
            url: "/webify.png",
            title: "Webify Winner - 2023",
            desc: 'Won first place at IEEE IdEEEas "Webify event", a Web Development based National-level event '
        }
    ]
    return(
        <div className="text-white mt-32 min-h-screen">
            <h1 className={`heading-text ${cherry.className} text-cta`}>My Wins</h1>
            <p className="para-text mt-2 mb-10">I have always loved participating in various different competitions whenever the opportunity arises, as such, I am extremely happy to have won quite a handful of those events, here are a few highlights of my wins :) </p>
            {certs.map(({title, url, desc}) => <CertShowcase title={title} url={url} desc={desc} />)}
        </div>
    )
}

const CertShowcase = ({title, url, desc}) => {
    return (
        <div className="w-full rounded-md px-5 py-5 group border-2 border-fade-primary bg-secondary transition-all duration-200 mb-4">  
            <div className=" overflow-hidden rounded-lg">
                <img src={url} className=' group-hover:scale-[1.15] transition-all duration-500 ease-in-out' alt="" />
            </div>
            <div className="flex items-center mt-5">
                <h1 className={`font-bold text-2xl ${cherry.className} group-hover:text-cta duration-400 transition-all mr-2`}>{title}</h1>
            </div>
            <p className='mt-2 text-fade-primary text-md font-medium whitespace-pre-line'>{desc}</p>
        </div>
    )
}