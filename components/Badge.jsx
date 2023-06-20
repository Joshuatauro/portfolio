
export default function Badge({icon, textColor, text, borderColor, bgColor}) {

    return(
        <span className={`text-xs uppercase ${textColor} ${borderColor} ${bgColor} border-2 bg-opacity-[0.12] font-semibold py-1 px-2 rounded-md flex items-center w-fit`}>
            {icon}
            <p className="ml-1">{text}</p>
        </span>
    )
}