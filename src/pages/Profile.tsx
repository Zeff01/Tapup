"use client"
import CustomisableCard from "@/components/Editor/CustomisableCard"
import Appointment from "@/components/Profile/Appointment"
import Services from "@/components/Profile/Services"
import Testimonials from "@/components/Profile/Testimonials"
import BusinessHours from "@/components/Profile/BusinessHours"
import ContactInfo from "@/components/Profile/ContactInfo"

export default function Profile() {
    return (
        <div className="flex flex-col items-center w-screen h-screen py-12">
            <div className="shadow-xl">
                <CustomisableCard className="shadow-none"/>
                <hr className="w-full border-b border-b-gray-200" />
                <Appointment />
                <Services />
                <hr className="w-full border-b border-b-gray-200" />
                <Testimonials />
                <BusinessHours />
                <ContactInfo />
            </div>
        </div>
    )
}