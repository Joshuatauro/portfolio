import {SunIcon} from '@heroicons/react/24/outline'
 
export default function Navbar(){
    return (
        <nav className="nav px-5 py-2 rounded-md sticky top-10 flex justify-between items-center">
            <h1 className="font-medium text-xl text-cta">JT</h1>
            <ul className="flex">
                <li className="font-medium capitalize px-5 mx-1 py-2 decoration-2 decoration-cta underline-offset-4 underline">about</li>
                <li className="font-medium capitalize px-5 mx-1 py-2">skills</li>
                <li className="font-medium capitalize px-5 mx-1 py-2">projects</li>
                <li className="font-medium capitalize px-5 mx-1 py-2">contact</li>
            </ul>
        </nav>
    )
}