import TextAccordion from "@/components/Editor/FontAccordion";
import NameAccordion from "@/components/Editor/NameAccordion";
import PositionAccordion from "@/components/Editor/PositionAccordion";
import CompanyAccordion from "@/components/Editor/CompanyAccordion";
import CoverAccordion from "@/components/Editor/CoverAccordion";
import ProfileImageAccordion from "./ProfileImageAccordion";
import ContactIconsAccordions from "./ContactIconsAccordion";

export default function Accordions() {
    return (
        <section className="w-[250px] px-4 py-12 flex flex-col gap-1 h-80vh overflow-y-scroll">
            <TextAccordion />
            <NameAccordion />
            <PositionAccordion />
            <CompanyAccordion />
            <CoverAccordion />
            <ProfileImageAccordion />
            <ContactIconsAccordions />
        </section>
    )
}