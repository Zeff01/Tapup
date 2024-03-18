import { IoCallOutline } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";

export  default function ContactInfo() {
    return (
        <section className="pl-16 pr-8 py-12 flex flex-row items-center gap-x-8">
            <h3 className="font-bold text-2xl me-auto">Contact Information</h3>
            <div className="flex flex-row items-center gap-3">
                <span className="rounded-full p-2 bg-customBlack text-customGray">
                    <IoCallOutline />
                </span>
                <span className="font-semibold">+639210900799</span>
            </div>
            <div className="flex flex-row items-center gap-3">
                <span className="rounded-full p-2 bg-customBlack text-customGray">
                    <BsChatDots />
                </span>
                <span className="font-semibold">jzeffsomera@gmail.com</span>
            </div>
        </section>
    )
}