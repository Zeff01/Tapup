import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="border-b flex flex-row justify-between text-lg font-bold py-3">
            <Link to={'/'} className="flex flex-row items-center">
                <img src='./tap-up-icon.svg' className="scale-50" />
                <p className="py-2 flex flex-row gap-1">
                    <span >Tap</span>
                    <span className="text-customGreen">Up</span>
                </p>
            </Link>  
            <div className="flex flex-row items-center gap-x-16 pr-20">
                <Link className="py-2 px-8 hover:text-customGreen transition-all duration-150"  to={'/about'}>About</Link>
                <Link className="py-2 px-8 hover:text-customGreen transition-all duration-150" to={'/services'}>Services</Link>
                <Link className="py-2 px-8 hover:text-customGreen transition-all duration-150" to={'/testimonials'}>Testimonials</Link>
                <div className="flex flex-row gap-4">
                    <Link className="py-2 px-8 hover:text-customGreen transition-all duration-150" to={'/login'}>Log in</Link>
                    <Link className="bg-black text-white py-2 px-8 rounded-sm hover:bg-customGreen hover:text-white transition-all duration-150" to={'/activate'}>Activate</Link>
                </div>
            </div>          
        </nav>
    )
}