type CardIndicatorProps = {
    title: string
    description: string
    order: number
}

export function CardIndicator(props: CardIndicatorProps) {
    let cssString = "px-5 py-4 w-60 md:w-80 bg-slate-200 border-2 border-collapse border-slate-300 shadow-lg rounded-xl"
    if (props.order % 2 === 0) {
        cssString += (" ml-16 -my-3 md:ml-52 md:-my-4 relative")
    } 
    
    return (
        <div className={cssString}>
            <div className="text-2xl md:text-4xl font-bold text-slate-700">
                <span>{props.title}</span>
            </div>
            <div className="flex flex-1 md:text-xl font-medium gap-2 items-center md:ml-3">
                <div className="border-4 border-collapse border-secundary h-8"></div>
                {props.description}
            </div>
        </div>
        )
}