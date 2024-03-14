// import { MdSpaceDashboard } from "react-icons/md";
// import { IoIosColorPalette } from "react-icons/io";
import { RiFontSize } from "react-icons/ri";
import { SlPicture } from "react-icons/sl";
import { NavLink, useLocation } from "react-router-dom";
import { IoShareSocial } from "react-icons/io5";
import { FaInfo } from "react-icons/fa6";

export default function Sidebar() {

    const location = useLocation()

    function scrollToAccordion(id:string) {
        const el = document.getElementById('edit-accordion') as  HTMLTableSectionElement
        const where = document.getElementById(id) as HTMLParagraphElement
        const position = where.getBoundingClientRect().top + window.scrollY
        el.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    }

    return (
        <section className="w-[80px] border-r  flex flex-col items-center gap-y-6 px-2 py-12">
            {/* TODO: create a custom layouts implementations */}
            {/* <NavLink to="#id" className="p-3 text-3xl hover:bg-gray-100 rounded-md"> 
                <MdSpaceDashboard className={location.search.includes('card-infos') ? 'fill-[#22c55e]' : "fill-[#b4b4b4]"} />
            </NavLink> */}
            
            <NavLink to="?scroll=font-style" className="p-3 text-3xl hover:bg-gray-100 rounded-md transition-all duration-150"
            onClick={() => scrollToAccordion('font-style')}
            >
                <RiFontSize  className={location.search.includes('font-style') ? 'fill-[#22c55e]' : "fill-[#b4b4b4]"}/>
            </NavLink>
            <NavLink to="?scroll=card-infos" className="p-3 text-3xl hover:bg-gray-100 rounded-md transition-all duration-150"
            onClick={() => scrollToAccordion('card-infos')}
            >
                <FaInfo className={location.search.includes('card-infos') ? 'fill-[#22c55e]' : "fill-[#b4b4b4]"} />
            </NavLink>
            <NavLink to="?scroll=images" className="p-3 text-3xl hover:bg-gray-100 rounded-md transition-all duration-150"
            onClick={() => scrollToAccordion('images')}
            >
                <SlPicture  className={location.search.includes('images') ? 'fill-[#22c55e]' : "fill-[#b4b4b4]"}/>
            </NavLink>
            <NavLink to="?scroll=background" className="p-3 text-3xl hover:bg-gray-100 rounded-md transition-all duration-150"
            onClick={() => scrollToAccordion('background')}
            >
                <svg width="30" height="30" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5.10938L5 1.10938M11 1.10938L1 11.1094M1 17.1094L17 1.10938M17 7.10938L7 17.1094M17 13.1094L13 17.1094" stroke={location.search.includes('background')? '#22c55e':'#b4b4b4'} stroke-opacity="0.49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </NavLink>
            <NavLink to="?scroll=contacts" className="p-3 text-3xl hover:bg-gray-100 rounded-md transition-all duration-150"
            onClick={() => scrollToAccordion('contacts')}
            >
                <IoShareSocial className={location.search.includes('contacts') ? 'fill-[#22c55e]' : "fill-[#b4b4b4]"} />
            </NavLink>

            
        </section>

    )
}


