import { FaRegStar, FaStar } from "react-icons/fa";


export default function Stars({stars}:{stars:number}) {
    
    const withStars = Array.from({length:stars}, (_,i) => i) 
    const withoutStars = Array.from({length:5-stars}, (_,i) => i)

    return (
        <div className="flex flex-row gap-x-1">
            {withStars.map(s => <FaStar key={s} />)}
            {withoutStars.map(s =>  <FaRegStar key={s} />)}
        </div>
    )
}