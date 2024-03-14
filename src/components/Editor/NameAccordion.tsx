import { FaRegUser } from "react-icons/fa6";
import { Input } from "../ui/input";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useCustomCard } from "@/hooks/useCustomCard";
import { elementOutlineHandler } from "@/lib/elementOutlineHandler";


export default function NameAccordion() {
    
    const changeName = useCustomCard(s => s.changeName)
    const name = useCustomCard(s => s.name)

    const hoverHandlers = elementOutlineHandler('c-name')

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger
                {...hoverHandlers} 
                >
                    <p className="flex flex-row items-center gap-4">
                        <span className="text-[#b4b4b4]">
                        <FaRegUser />
                        </span>
                        <span>Name</span>
                    </p>
                    
                </AccordionTrigger>
                <AccordionContent className="border rounded-md border-t-transparent p-1">
                    <Input 
                    type="text" value={name} 
                    onChange={(e) => changeName(e.currentTarget.value)}
                    className="focus:outline-none bg-gray-100"
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
  )
}

  