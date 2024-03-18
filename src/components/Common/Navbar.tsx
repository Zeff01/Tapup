import { Link, NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

export default function Navbar() {

    function isActiveChecker(isActive:boolean) {
        return isActive ? "py-2  hover:text-customGreen transition-all duration-150 border-b border-customBlack hover:border-customGreen" : "py-2 hover:text-customGreen transition-all duration-150 border-b border-transparent"
    }

    return (
        <nav className="border-b flex flex-row justify-between text-lg font-bold py-3">
            <Link to={'/'} className="flex flex-row items-center">
                <img src='/tap-up-icon.svg' className="scale-50" />
                <p className="py-2 flex flex-row gap-1">
                    <span >Tap</span>
                    <span className="text-customGreen">Up</span>
                </p>
            </Link>  
            <div className="hidden sm:flex flex-row items-center sm:gap-x-6 md:gap-x-8 lg:gap-x-12 sm:pr-4 md:pr-8 lg:pr-20">
                <NavLink className={({isActive}) => isActiveChecker(isActive)}  to={'/about'}>About</NavLink>
                <NavLink className={({isActive}) => isActiveChecker(isActive)} to={'/services'}>Services</NavLink>
                <NavLink className={({isActive}) => isActiveChecker(isActive)} to={'/testimonials'}>Testimonials</NavLink>
                <div className="flex flex-row items-center gap-4">
                    <Link className="py-2 pr-8 hover:text-customGreen transition-all duration-150" to={'/login'}>Log in</Link>
                    <Link className="bg-black text-white py-2 px-8 rounded-sm hover:bg-customGreen hover:text-white transition-all duration-150" to={'/activate'}>Activate</Link>
                </div>
            </div>
            <Sheet>
            <SheetTrigger className="block sm:hidden p-2 hover:text-customGreen">
                <span className="text-3xl ">
                    <RxHamburgerMenu />
                </span>
            </SheetTrigger>
            <SheetContent className="w-[250px] py-12">
                <div className="flex flex-col">
                <Link className="text-xl py-2 hover:text-customGreen transition-all duration-150 border-b border-transparent"  to={'/about'}>About</Link>
                <Link className="text-xl py-2 hover:text-customGreen transition-all duration-150 border-b border-transparent" to={'/services'}>Services</Link>
                <Link className="text-xl py-2 hover:text-customGreen transition-all duration-150 border-b border-transparent" to={'/testimonials'}>Testimonials</Link>
                <Link className="text-xl py-2 hover:text-customGreen transition-all duration-150" to={'/login'}>Log in</Link>
                <Link className="text-xl py-2 hover:text-customGreen transition-all duration-150 border-b border-transparent" to={'/activate'}>Activate</Link>
                </div>
            </SheetContent>
            </Sheet>
        </nav>
    )
}