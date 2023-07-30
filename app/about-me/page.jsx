"use client"
import { useEffect, useState } from "react";
import { cherry } from "../fonts";
import Badge from "@/components/Badge";
import { SiReact } from "react-icons/si";

export default function AboutMe() {
    const [age, setAge] = useState()
    useEffect(() => {
        const dob = new Date('2003-10-15');
        const today = new Date();
        setAge(Math.floor((today-dob)/(365.25*24*60*60*1000)))
    }, [])
    return(
        <div className="min-h-screen">
            <div className="my-32">
                <h1 className={`${cherry.className} heading-text  text-cta`}>About me</h1>
                <p className="para-text mt-1">Hey there, my name's Joshua Tauro. I am currently {age} years old and pursuing my Bachelors of Techology in CSE at <a className="text-white underline decoration-cta underline-offset-4 hover:text-cta duration-200 transition-all" href="https://sit.ac.in" target="_blank" rel="noreferrer">Siddaganga Institute of Technology</a>.</p>
                <br/>
                <p className="para-text">I am a Fullstack Developer, who absolutely loves working with <span className="text-primary">React</span> for the frontend and <span className="text-primary">NodeJS</span> for the backend. You can currently find me participating in various differentHackathons, Coding Competitions, building projects that I've always wanted to build. Or trying my hand at DSA problems, or um pulling my hair out at them lol ;)</p>
                <br/>
                <p className="para-text">On the weekends, you could probably find me glued to a screen following the <span className="text-primary">Formula 1</span> Weekend (RAWE CEEK 🏎️), as I hope to see <span className="text-cta">Lewis Hamilton</span> and <span className="text-[#00F5D1]">Mercedes</span> rise back to the top of the table and hopefully have Lewis win his 8th WDC (World Drivers Championship)</p>
                <h2 className={`mt-10 text-3xl text-primary ${cherry.className} font-semibold `}>My childhood</h2>
                <p className="para-text mt-1">While my nationality is Indian, I was only born here before my family shifted overseas to Dubai, United Arab Emirates. I've been forever grateful to be able to call both these amazingly beautiful countries my home, and I wouldn't want it any other way &lt;3</p>
                <br/>
                <p className="para-text">I had started learning <span className="text-primary">Web development</span> during the pandemic in 2020. It started out as something to take my mind off of what was going on in the world, but as time passed, I realized that it was something I am extremely passionate about and would love to pursue it as a career, which is why I am where I am today :)</p>
            </div>
        </div>
    )
}