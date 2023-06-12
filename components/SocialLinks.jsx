import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiGmail, SiLeetcode } from 'react-icons/si'
export default function SocialLinks() {
    return(
        <>
        <div className="fixed bottom-0 ml-14">
            <ul className='list'>
                <li className="mb-7">
                    <a href="http://github.com/joshuatauro" target="_blank" rel="noreferrer">
                        <FiGithub color="white" className='icon' size={20} />
                    </a>
                </li>
                <li className="mb-7">
                    <a href="https://www.linkedin.com/in/joshua-tauro-3b879b200/" target="_blank" rel="noreferrer">
                        <FiLinkedin color="white" size={20} className='icon' />
                    </a>
                </li>
                <li className="mb-7">
                    <a href="https://www.instagram.com/joshuatauro45/" target="_blank" rel="noreferrer">
                        <FiInstagram color="white" size={20} className='icon' />
                    </a>
                </li>
                <li className="mb-7">
                    <a href="https://leetcode.com/joshuatauro45/" target="_blank" rel="noreferrer">
                        <SiLeetcode color="white" size={20} className='icon' />
                    </a>
                </li>
                

            </ul>
        </div>
        <div className="fixed top-[8.4rem] right-0">
            <div className="email-side rotate-90">
                <a href="mailto:joshuatauro45@gmail.com" className='ml-7 text-white hover:text-cta  transition duration-200 ease-in-out'>joshuatauro45@gmail.com</a>
            </div>
        </div>
        </>
    )
}