import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"

export default function Root() {
    return (
        <div className="w-full overflow-x-hidden">
            <Navbar />
            <Outlet />
        </div>
    )
}