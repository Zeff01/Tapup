import { IoIosColorPalette } from "react-icons/io";
import { Input } from "../ui/input";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useCustomCard } from "@/hooks/useCustomCard";


export default function BackgroundColorAccordion() {
    
    const backgroundColor = useCustomCard(s => s.backgroundColor)
    const changeBackgroundColor = useCustomCard(s => s.changeBackgroundColor)

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <p className="flex flex-row items-center gap-4">
                        <span className="text-[#b4b4b4]">
                        <IoIosColorPalette />
                        </span>
                        <span className="text-[12px]">Background color</span>
                    </p>
                    
                </AccordionTrigger>
                <AccordionContent className="border rounded-md border-t-transparent p-1">
                        <Input 
                        type="color" value={backgroundColor} 
                        onChange={(e) => changeBackgroundColor(e.currentTarget.value)}                    
                        className="py-0 px-16 pt-1"
                        />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
  )
}

  