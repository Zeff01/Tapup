import TextAccordion from "@/components/Editor/FontAccordion";
import CustomisableCard from "@/components/Editor/CustomisableCard";
import NameAccordion from "@/components/Editor/NameAccordion";
import PositionAccordion from "@/components/Editor/PositionAccordion";
import CompanyAccordion from "@/components/Editor/CompanyAccordion";



export default function TempEdit() {
    return (
        <div className="w-screen flex flex-row h-[600px]">
            <section className="w-[80px] border-r"></section>
            <section className="w-[250px] px-4 py-12 flex flex-col gap-1">
                <TextAccordion />
                <NameAccordion />
                <PositionAccordion />
                <CompanyAccordion />
            </section>
            <section className="flex-grow border-x flex items-center justify-center">
                <CustomisableCard />
            </section>
            <section className="w-[80px]"></section>
        </div>
    )
}