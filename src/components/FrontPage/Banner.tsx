import CardStack from "./CardStack"
import BannerActions from "./BannerActions"
import PaymentLogos from "./PaymentLogos"

import { Button } from "../ui/button";

import { FaArrowDown } from "react-icons/fa";

export default function Banner() {
    return (
        <div className="h-screen w-full relative">
            <div className="z-[1000] absolute top-[70px] left-1/2 md:left-[400px] -translate-x-1/2 md:translate-x-0 text-[64px] leading-[75px] font-[700] drop-shadow-2xl">
                <p className="text-customGreen">Tap Up</p>
                <p>Card</p>
            </div>
            <div  className="z-[1000] absolute bottom-[300px] md:bottom-[150px] right-1/2 md:right-[300px] translate-x-1/2 md:translate-x-0 text-[64px] leading-[75px] font-[700] drop-shadow-2xl">
                <p>is here.</p>
            </div>
            
            <CardStack />
            <div
                className="scale-75 sm:scale-100 absolute bottom-[100px] right-[50px] w-[450px] h-[450px] flex items-center justify-center"
            >
                <img src="./chrome-card.svg" width={450}/>
            </div>
            <BannerActions />
            <PaymentLogos />
            <Button variant={"icon"} size={"icon"} className="w-[54px] h-[54px] absolute -bottom-6 sm:bottom-2 left-1/2 -translate-x-1/2">
                <FaArrowDown />
            </Button>
        </div>
    )
}