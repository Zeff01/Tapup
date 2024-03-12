import { FaRegUser } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Input } from "../ui/input";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useCustomCard } from "@/hooks/useCustomCard";



export default function PositionAccordion() {
    
    const changePosition = useCustomCard(s => s.changePosition)
    const position = useCustomCard(s => s.position)

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <p className="flex flex-row items-center gap-6">
                        <span className="text-[#b4b4b4]">
                        <IoBriefcaseOutline />
                        </span>
                        <span>Position</span>
                    </p>
                    
                </AccordionTrigger>
                <AccordionContent className="border rounded-md border-t-transparent p-1">
                    <Input 
                    type="text" value={position} 
                    onChange={(e) => changePosition(e.currentTarget.value)}
                    className="focus:outline-none bg-gray-100"
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
  )
}

  