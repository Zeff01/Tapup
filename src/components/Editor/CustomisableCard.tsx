import { useCustomCard } from "@/hooks/useCustomCard"
import { SocialLists } from "@/lib/SOCIAL_ICONS"

export  default function CustomisableCard() {
    const customFont = useCustomCard(s => s.customFont)
    const name = useCustomCard(s => s.name)
    const position = useCustomCard(s => s.position)
    const company = useCustomCard(s => s.company)
    const socials = useCustomCard(s => s.socials)

    return (
        <div className={`w-[800px] h-[500px] shadow-lg flex flex-col rounded-xl overflow-hidden`}>  
            {/* cover */}
            <div className="bg-gray-200 flex-grow"></div>
            {/* details */}
            <div className="h-[40%] px-8 flex flex-row justify-between">
                {/* left side */}
                <div className="relative pl-8">
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
                <div className="flex flex-row-reverse flex-wrap h-fit w-[250px] pt-4 gap-2">
                    {/* contact infos */}
                    {socials.map(({socialType}) => {
                        const SocialIcon = SocialLists.find(s => s.type === socialType)!.icon as JSX.Element
                        return (
                            <div key={socialType} className={`w-fit h-fit aspect-square bg-gray-200 text-[#7b7b7b] text-2xl p-2 rounded-sm `}>
                                {SocialIcon}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}