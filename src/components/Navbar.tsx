// import icon from './icon.png'
export default function Navbar() {
    return (
        <nav className="border-b">
            <div className="flex flex-row gap-4 items-center">
                <a>
                    <img src='./icon.png' className="scale-50"/>
                </a>
                <a>
                    <span>Tap</span>
                    <span className="font-roboto">Up</span>
                </a>
            </div>  
            <div>
                <a className="">About</a>
                <a>Services</a>
                <a>Testimonials</a>
                <div>

                </div>
            </div>          
        </nav>
    )
}