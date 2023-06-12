export default function Circle({color,top,position, delay}){
    return(
        <div className={` h-60 w-60 absolute ${top} ${color} ${position} opacity-60 rounded-full filter   mix-blend-difference blur-[80px] left animate-blob ${delay}`}></div>
    )
}