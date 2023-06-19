
export default function Badge({icon, color, text}) {
    const bg = 'border-'+color
    return(
        <div className={`text-xs ml-2 uppercase ${bg} border-2 text-cta bg-cta bg-opacity-[0.12] font-semibold py-1 px-2 rounded-md flex items-center`}>
            {icon}
            <p className="ml-1">{text}</p>
        </div>
    )
}