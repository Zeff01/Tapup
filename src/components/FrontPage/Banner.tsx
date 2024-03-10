import CardStack from "./CardStack"
import BannerActions from "./BannerActions"
import PaymentLogos from "./PaymentLogos"

export default function Banner() {
    return (
        <div className="h-screen w-full relative">
            <div className="absolute top-[70px] left-[400px] text-[64px] leading-[75px] font-[700] drop-shadow-2xl">
                <p className="text-customGreen">Tap Up</p>
                <p>Card</p>
            </div>
            <div  className="absolute bottom-[150px] right-[300px] text-[64px] leading-[75px] font-[700] drop-shadow-2xl">
                <p>is here.</p>
            </div>
            
            <CardStack />
            <div
                className="absolute bottom-[100px] right-[50px] w-[450px] h-[450px] flex items-center justify-center"
            >
                <img src="./chrome-card.svg" width={450}/>
            </div>
            <BannerActions />
            <PaymentLogos />
        </div>
    )
}