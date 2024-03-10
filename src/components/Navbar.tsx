import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="border-b flex flex-row justify-between">
            <div className="flex flex-row gap-4 items-center">
                <Link to={'/'}>
                    <img src='./icon.png' className="scale-50"/>
                </Link>
                <Link to={'/'}>
                    <span>Tap</span>
                    <span className="font-roboto">Up</span>
                </Link>
            </div>  
            <div className="flex flex-row items-center gap-8 pr-8">
                <Link  to={'/about'}>About</Link>
                <Link to={'/services'}>Services</Link>
                <Link to={'/testimonials'}>Testimonials</Link>
                <div className="flex flex-row gap-2">
                    <Link to={'/login'}>login</Link>
                    <Link to={'/activate'}>activate</Link>
                </div>
            </div>          
        </nav>
    )
}