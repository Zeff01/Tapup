import Banner from "@/components/FrontPage/Banner"
import Showcase from "@/components/FrontPage/Showcase"
import ShoppingCard from "@/components/FrontPage/ShoppingCards"
import Details from "@/components/FrontPage/Details"

// TODO: hex color of the circle
export default function FrontPage() {
    return (
        <div className="w-screen relative">
            <Banner />
            <Showcase />
            <ShoppingCard />
            <Details />
        </div>
    )
}