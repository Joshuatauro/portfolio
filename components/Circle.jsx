export default function Circle({color,top,position, delay}){
    return(
        <div className={` h-[300px] w-[300px] absolute  ${color} ${position} opacity-40 rounded-full filter mix-blend-color-burn bg blur-[92px] top-[-160px]  ${delay}`}></div>
    )
}