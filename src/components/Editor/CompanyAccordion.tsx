import { FaRegUser } from "react-icons/fa6";
import { Input } from "../ui/input";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useCustomCard } from "@/hooks/useCustomCard";



export default function CompanyAccordion() {
    
    const changeCompany = useCustomCard(s => s.changeCompany)
    const company = useCustomCard(s => s.company)

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <p className="flex flex-row items-center gap-6">
                        <span className="text-[#b4b4b4]">
                        <FaRegUser />
                        </span>
                        <span>Company</span>
                    </p>
                    
                </AccordionTrigger>
                <AccordionContent className="border rounded-md border-t-transparent p-1">
                    <Input 
                    type="text" value={company} 
                    onChange={(e) => changeCompany(e.currentTarget.value)}
                    className="focus:outline-none bg-gray-100"
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
  )
}

  