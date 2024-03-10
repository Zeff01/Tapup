import { Button } from "../ui/button"

export default function BannerActions() {
    return (
        <div className="w-[400px] absolute bottom-[150px] left-[50px] flex flex-col gap-y-7">
            <div className="flex flex-col gap-y-1">
                <h2 className="text-customGreen text-3xl font-[500] tracking-[-2px]">
                    Tap to Connect
                </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="flex flex-row gap-x-2">
                <Button>Get a card</Button>
                <Button variant={'outline'}>Learn More</Button>
            </div>
        </div>
    )
}