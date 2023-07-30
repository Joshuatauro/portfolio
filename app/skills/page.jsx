import { SiC, SiCplusplus, SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSass, SiTailwindcss } from "react-icons/si";
import { cherry } from "../fonts";
import Badge from "@/components/Badge";

export default function Skills() {
    const languages = [
        {
            icon: <SiJavascript />,
            textColor: "text-[#EFD81D]",
            borderColor: "border-[#EFD81D]",
            bgColor: "bg-[#EFD81D]",
            text: "JavaScript"
        },
        {
            icon: <SiCplusplus />,
            textColor: "text-[#6295CB]",
            borderColor: "border-[#6295CB]",
            bgColor: "bg-[#6295CB]",
            text: "C++"
        },
        {
            icon: <SiC />,
            textColor: "text-[#6295CB]",
            borderColor: "border-[#6295CB]",
            bgColor: "bg-[#6295CB]",
            text: "C language"
        },
    ]
    const frontend = [
        {
            icon: <SiReact />,
            textColor: "text-[#5ED3F3]",
            borderColor: "border-[#5ED3F3]",
            bgColor: "bg-[#5ED3F3]",
            text: "React"
        },
        {
            icon: <SiNextdotjs />,
            textColor: "text-[#F7F7F7]",
            borderColor: "border-[#F7F7F7]",
            bgColor: "bg-[#F7F7F7]",
            text: "NextJS"
        },
        {
            icon: <SiHtml5 />,
            textColor: "text-[#DD4B25]",
            borderColor: "border-[#DD4B25]",
            bgColor: "bg-[#DD4B25]",
            text: "HTML5"
        },
        {
            icon: <SiTailwindcss />,
            textColor: "text-[#38BDF8]",
            borderColor: "border-[#38BDF8]",
            bgColor: "bg-[#38BDF8]",
            text: "TailwindCSS"
        },
        {
            icon: <SiSass />,
            textColor: "text-[#C76494]",
            borderColor: "border-[#C76494]",
            bgColor: "bg-[#C76494]",
            text: "Scss"
        },
        {
            icon: <SiCss3 />,
            textColor: "text-[#254BDD]",
            borderColor: "border-[#254BDD]",
            bgColor: "bg-[#254BDD]",
            text: "CSS3"
        }
    ]
    const backend = [
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
            icon: <SiFirebase />,
            textColor: "text-[#FFCB2B]",
            borderColor: "border-[#FFCB2B]",
            bgColor: "bg-[#FFCB2B]",
            text: "Firebase"
        },
    ]
    const databases = [
        {
            icon: <SiPostgresql />,
            textColor: "text-[#336791]",
            borderColor: "border-[#336791]",
            bgColor: "bg-[#336791]",
            text: "PostgreSQL"
        },
        {
            icon: <SiMysql />,
            textColor: "text-[#F79F12]",
            borderColor: "border-[#F79F12]",
            bgColor: "bg-[#F79F12]",
            text: "MySQL"
        },
        {
            icon: <SiMongodb />,
            textColor: "text-[#429543]",
            borderColor: "border-[#429543]",
            bgColor: "bg-[#429543]",
            text: "MongoDB"
        },
    ]
    return(
        <div className="min-h-screen">
            <div className="my-32">
                <h1 className={`heading-text ${cherry.className} text-cta`}>My Skills</h1>
                <p className="para-text mt-2">Over the years, I've spent a lot of time and effort learning and relearning various different languages/frameworks/tools etc. Here is a brief overview of all the technologies I am familiar with</p>
                <h2 className={`${cherry.className} section-heading-text mt-10` }>Languages</h2>
                <div className="flex gap-2 mt-2">
                    {
                        languages.map(({icon, textColor, bgColor, borderColor, text}) => <Badge icon={icon}  text={text} textColor={textColor} bgColor={bgColor} borderColor={borderColor} />)
                    }
                </div>
                <h2 className={`${cherry.className} section-heading-text mt-10` }>Frontend</h2>
                <p className="para-text mb-3">My favorite part of Web Development i'd say, I absolutely love creating functional and minimalistic websites that users from all over the world can have a good time using. You'll mostly catch me hands deep in these languages</p>
                <div className="flex flex-wrap gap-2">
                    {
                        frontend.map(({icon, textColor, bgColor, borderColor, text}) => <Badge icon={icon}  text={text} textColor={textColor} bgColor={bgColor} borderColor={borderColor} />)
                    }
                </div>
                <h2 className={`${cherry.className} section-heading-text mt-10` }>Backend</h2>
                <p className="para-text mb-3">I have always had a huge interest in learning the server side of things, building my own API's and understanding the architecture of various different sites that handle huge amounts of traffic everyday without any lag.</p>
                <div className="flex gap-2">
                    {
                        backend.map(({icon, textColor, bgColor, borderColor, text}) => <Badge icon={icon}  text={text} textColor={textColor} bgColor={bgColor} borderColor={borderColor} />)
                    }
                </div>
                <h2 className={`${cherry.className} section-heading-text mt-10` }>Database</h2>
                <p className="para-text mb-3">I've always been someone who would choose relational SQL databases over NoSQL ones, hence the reason for my overuse (ond over-love) for PostgreSQL and similar databases ;)</p>
                <div className="flex gap-2">
                    {
                        databases.map(({icon, textColor, bgColor, borderColor, text}) => <Badge icon={icon}  text={text} textColor={textColor} bgColor={bgColor} borderColor={borderColor} />)
                    }
                </div>
            </div>
        </div>
    )
}