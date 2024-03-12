import FontAccordion from "@/components/Editor/FontAccordion";
import TextColorAccordion from "./TextColorAccordion";
import BackgroundColorAccordion from "./BackgroundColorAccordion";
import NameAccordion from "@/components/Editor/NameAccordion";
import PositionAccordion from "@/components/Editor/PositionAccordion";
import CompanyAccordion from "@/components/Editor/CompanyAccordion";
import CoverAccordion from "@/components/Editor/CoverAccordion";
import ProfileImageAccordion from "./ProfileImageAccordion";
import ContactIconsAccordions from "./ContactIconsAccordion";
import AddressAccordion from "./AdressAccordion";

export default function Accordions() {
    return (
        <section className="w-[250px] px-4 py-12 flex flex-col gap-1 overflow-y-scroll">
            <FontAccordion />
            <TextColorAccordion />
            <BackgroundColorAccordion />
            <NameAccordion />
            <PositionAccordion />
            <CompanyAccordion />
            <AddressAccordion />
            <CoverAccordion />
            <ProfileImageAccordion />
            <ContactIconsAccordions />
        </section>
    )
}