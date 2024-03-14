import Navbar from "@/components/Common/Navbar"
import { Outlet, useLocation } from "react-router-dom"

export default function Root() {
    const location = useLocation()
    
    return (
        <div className="w-full overflow-x-hidden">
            {
                !location.pathname.includes('/edit') && // temporary
                <Navbar />
            }
            <Outlet />
        </div>
    )
}