import { SiExpress, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss } from "react-icons/si";
import { cherry } from "../fonts";
import Badge from "@/components/Badge";

export default function Ecom() {
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
        <div className="my-32 min-h-screen">
            <h1 className={`heading-text ${cherry.className} text-cta mb-2`}>Ecommed</h1>
            <div className="group overflow-hidden rounded-lg">
                <img src={"/ecom.png"} className='group-hover:scale-105 transition-all duration-200 ease-in-out' alt="" />
            </div>
            <div className={`${cherry.className} section-heading-text mt-10`}>Features</div>
            <p className="para-text">View a wide variety of different technological items such as GPUs, CPUs, Monitors, Mouse etc all in one place</p>
            <br/>
            <p className="para-text">User can add products to their shopping cart/wishlist while browsing the products. It provides a summary of selected items, quantities, and total costs. During the checkout process, customers can review their order, enter shipping and billing details, and select preferred payment methods</p>
            <br />
            <p className="para-text">Users can provide feedback by submitting reviews and ratings for products they have purchased. This helps other users form a better opinion of the product before buying it.</p>
            <br />
            <p className="para-text">Keep track of status of all of their orders be it current orders that are en-route or orders that they have successfully ordered in the past</p>
            <h2 className={`section-heading-text ${cherry.className} mt-10 `}>Tech Stack</h2>
            <div className="flex flex-wrap gap-2 mt-2">
                {
                    tech.map(({icon, textColor, borderColor, bgColor, text}) => <Badge icon={icon} bgColor={bgColor} text={text} textColor={textColor} borderColor={borderColor} />)
                }
            </div>
        </div>
    )
}