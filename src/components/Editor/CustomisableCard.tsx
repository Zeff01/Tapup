import './customCardStyles.css'
import { useCustomCard } from "@/hooks/useCustomCard"
import { SocialLists } from "@/lib/SOCIAL_ICONS"

export  default function CustomisableCard() {
    const customFont = useCustomCard(s => s.customFont)
    const name = useCustomCard(s => s.name)
    const position = useCustomCard(s => s.position)
    const company = useCustomCard(s => s.company)
    const address = useCustomCard(s => s.address)
    const socials = useCustomCard(s => s.socials)
    const coverURL = useCustomCard(s => s.coverURL)
    const profileURL = useCustomCard(s => s.profileURL)
    const fontColor = useCustomCard(s => s.fontColor)
    const backgroundColor = useCustomCard(s =>  s.backgroundColor)
    const iconColor = useCustomCard(s =>  s.iconColor)
    const iconBackground = useCustomCard(s =>  s.iconBackground)

    const background =  coverURL ? '' : 'bg-gray-200'
    const profile = profileURL ? '' : 'bg-blue-300'

    return (
        <div className={`w-[800px] h-[500px] shadow-lg flex flex-col rounded-xl`}>  
            {/* cover */}
            <div className={`c-cover ${background} flex-grow`} style={coverURL? {background: `url("${coverURL}")`, backgroundSize:'cover'}: {}}></div>
            {/* details */}
            <div className="c-background h-[40%] px-8 flex flex-row justify-between" style={{backgroundColor}}>
                {/* left side */}
                <div className="relative pl-8">
                {/* profile pic */}
                    <div className="c-profile absolute -translate-y-1/2 h-[150px] aspect-square border-4 border-white rounded-full overflow-hidden">
                        <div className={` w-full h-full ${profile}`} style={profileURL? {background: `url("${profileURL}")`, backgroundSize:'cover'}: {}}></div>
                    </div>
                    {/* infos */}
                    <div className="pt-[75px] max-w-[400px] c-text-color c-font">
                        {/* name */}
                        <p className={`c-name  font-bold text-2xl ${customFont}`} style={{color: fontColor}}>{name}</p>
                        {/* position */}
                        <p className={`c-position  font-[500] ${customFont}`} style={{color: fontColor}}>{position}</p> 
                        {/* company */}
                        <p className={`c-company  ${customFont}`} style={{color: fontColor}}>{company}</p>
                        {/* address */}
                        <p className={`c-address  ${customFont} text-sm`} style={{color: fontColor}}>{address}</p>
                    </div>
                </div>
                {/* right sides */}
                <div className="c-icons flex flex-row-reverse flex-wrap h-fit w-[250px] pt-4 gap-2">
                    {/* contact infos */}
                    {socials.map(({socialType}) => {
                        const SocialIcon = SocialLists.find(s => s.type === socialType)!.icon as JSX.Element
                        return (
                            <div 
                            key={socialType} 
                            className={`c-icon w-fit h-fit aspect-square text-2xl p-2 rounded-sm shadow-sm`}
                            style={{
                                color: iconColor,
                                backgroundColor: iconBackground
                            }}
                            >
                                {SocialIcon}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}