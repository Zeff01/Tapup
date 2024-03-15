import CustomisableCard from "@/components/Editor/CustomisableCard";
import Accordions from "@/components/Editor/Accordions";
import Sidebar from "@/components/Editor/Sidebar";



export default function TempEdit() {
    return (
        <div className="w-screen flex flex-row h-[600px]">
            <Sidebar />
            <Accordions />
            <section className="flex-grow border-x flex items-center justify-center">
                <CustomisableCard />
            </section>
            <section className="w-[80px]"></section>
        </div>
    )
}