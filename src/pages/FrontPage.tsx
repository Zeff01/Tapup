import Banner from "@/components/FrontPage/Banner"
import Showcase from "@/components/FrontPage/Showcase"

// TODO: hex color of the circle
export default function FrontPage() {
    return (
        <div className="w-screen relative">
            <Banner />
            <Showcase />
        </div>
    )
}