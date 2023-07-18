import Link from "next/link"
import { FiUser } from "react-icons/fi"
export default function Navbar(){

    return (
        <nav className="nav px-5 py-2 rounded-md sticky z-50 top-10 flex justify-between items-center text-white">
            <Link href="/">
                <h1 className="font-medium text-xl text-cta">JT</h1>
            </Link>
            <ul className="flex">
                <Link href="/about-me">
                    <li className="font-medium capitalize mx-2 py-2">about</li>
                </Link>
                <Link href="/skills">
                    <li className="font-medium capitalize mx-2 py-2">skills</li>
                </Link>
                {/* <Link href="/projects">
                    <li className="font-medium capitalize mx-2 py-2">projects</li>
                </Link> */}
                <Link href="/certifications">
                    <li className="font-medium capitalize mx-2 py-2">certificates</li>
                </Link>
            </ul>
        </nav>
    )
}