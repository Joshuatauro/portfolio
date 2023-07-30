import Link from "next/link";
import { cherry } from "../fonts";
import { SiExpress, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from "react-icons/si";
import Badge from "@/components/Badge";

export default function Hive() {
    const tech = [
        {
            icon: <SiReact />,
            textColor: "text-[#5ED3F3]",
            borderColor: "border-[#5ED3F3]",
            bgColor: "bg-[#5ED3F3]",
            text: "React"
        },
        {
            icon: <SiTailwindcss />,
            textColor: "text-[#38BDF8]",
            borderColor: "border-[#38BDF8]",
            bgColor: "bg-[#38BDF8]",
            text: "TailwindCSS"
        },
        {
            icon: <SiNodedotjs />,
            textColor: "text-[#78B262]",
            borderColor: "border-[#78B262]",
            bgColor: "bg-[#78B262]",
            text: "NodeJS"
        },
        {
            icon: <SiExpress />,
            textColor: "text-[#FFFFFF]",
            borderColor: "border-[#FFFFFF]",
            bgColor: "bg-[#FFFFFF]",
            text: "ExpressJS"
        },
        {
            icon: <SiPostgresql />,
            textColor: "text-[#336791]",
            borderColor: "border-[#336791]",
            bgColor: "bg-[#336791]",
            text: "PostgreSQL"
        },
    ]
    return(
        <div className="min-h-screen my-32">
            <h1 className={`${cherry.className} heading-text text-cta mb-2`}>Hive!</h1>
            <div className="group overflow-hidden rounded-lg">
                    <img src={"/hive.png"} className='group-hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
                </div>
            <h2 className={`section-heading-text ${cherry.className} mt-10`}>About</h2>
            <p className="para-text"><span className="text-primary">HIVE!</span> is a fullstack application that aims to provide the residents of Tumkur a much easier and helpful way of finalizing a college for themselves/their wards by providing them a list of all the colleges in the district along with all important information about the college.
            </p>
            <br/>
            <Link href="/" className="para-text underline underline-offset-4 duration-200 transition-all decoration-cta hover:text-cta text-primary">Winner of IEEE's WIE code Hackathon</Link>
            <h2 className={`${cherry.className} section-heading-text mt-10`}>Features</h2>
            <p className="para-text">The primary feature is that it also provides a safe space wherein the people interested in a certain college can ask any questions they have regarding the college and have it answered by students/faculty/alumni of that respective college </p>
            <br/>
            <p className="para-text">Provides a list of all colleges in the district which helps spread awareness of smaller colleges which may be relatively unknown but might be comparable when it comes to statistics regarding various different parameters with respect to bigger, well-known colleges</p>
            <br/>
            <p className="para-text">A full-text search bar implemented using PostgreSQL vectors which allows for easy searching of questions asked in the past, to help prevent flooding the forum with questions of the same type</p>
            <br/>
            <p className="para-text">Any and all important data anyone would need in regards to finalize a college provided together in a central place, be it anything from Fee's to Placement's to College Fests, all this would easily be accessible</p>
            <h2 className={`section-heading-text ${cherry.className} mt-10 `}>Tech Stack</h2>
            <div className="flex flex-wrap gap-2 mt-2">
                {
                    tech.map(({icon, textColor, borderColor, bgColor, text}) => <Badge icon={icon} bgColor={bgColor} text={text} textColor={textColor} borderColor={borderColor} />)
                }
            </div>
        </div>
    )
}