import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="border-b flex flex-row justify-between text-lg font-bold">
            <div className="flex flex-row gap-4 items-center">
                <Link to={'/'}>
                    <img src='./icon.png' className="scale-50"/>
                </Link>
                <Link to={'/'} className="py-2 px-8 flex flex-row gap-1">
                    <span >Tap</span>
                    <span className="text-customGreen">Up</span>
                </Link>
            </div>  
            <div className="flex flex-row items-center gap-x-16 pr-20">
                <Link className="py-2 px-8"  to={'/about'}>About</Link>
                <Link className="py-2 px-8" to={'/services'}>Services</Link>
                <Link className="py-2 px-8" to={'/testimonials'}>Testimonials</Link>
                <div className="flex flex-row gap-4">
                    <Link className="py-2 px-8" to={'/login'}>login</Link>
                    <Link className="bg-black text-white py-2 px-8 rounded-sm" to={'/activate'}>activate</Link>
                </div>
            </div>          
        </nav>
    )
}