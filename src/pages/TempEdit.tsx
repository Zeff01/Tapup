import CustomisableCard from "@/components/Editor/CustomisableCard";
import Accordions from "@/components/Editor/Accordions";



export default function TempEdit() {
    return (
        <div className="w-screen flex flex-row h-[600px]">
            <section className="w-[80px] border-r"></section>
            <Accordions />
            <section className="flex-grow border-x flex items-center justify-center">
                <CustomisableCard />
            </section>
            <section className="w-[80px]"></section>
        </div>
    )
}