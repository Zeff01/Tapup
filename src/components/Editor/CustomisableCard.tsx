import { useCustomCard } from "@/hooks/useCustomCard"


export  default function CustomisableCard() {
    const customFont = useCustomCard(s => s.customFont)
    const name = useCustomCard(s => s.name)
    const position = useCustomCard(s => s.position)
    const company = useCustomCard(s => s.company)
        

    return (
        <div className={`w-[800px] h-[500px] shadow-lg flex flex-col rounded-xl overflow-hidden`}>  
            {/* cover */}
            <div className="bg-gray-200 flex-grow"></div>
            {/* details */}
            <div className="h-[40%] px-16">
                {/* left side */}
                <div className="relative">
                {/* profile pic */}
                    <div className="absolute -translate-y-1/2 h-[150px] aspect-square border-4 border-white rounded-full overflow-hidden">
                        <div className="w-full h-full bg-blue-300"></div>
                    </div>
                    {/* infos */}
                    <div className="pt-[90px]">
                        {/* name */}
                        <p className={`font-bold text-2xl ${customFont}`}>{name}</p>
                        {/* position */}
                        <p className={`font-[500] ${customFont}`}>{position}</p> 
                        {/* company */}
                        <p className={`${customFont}`}>{company}</p>
                    </div>
                </div>
                {/* right sides */}
                <div>
                    {/* contact infos */}
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}