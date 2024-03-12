import { Input } from "../ui/input";
import { CgProfile } from "react-icons/cg";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


// TODO: complete this
export default function ProfileImageAccordion() {
    

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <p className="flex flex-row items-center gap-4">
                        <span className="text-[#b4b4b4]">
                            <CgProfile />
                        </span>
                        <span className="text-sm">Profile Image</span>
                    </p>
                    
                </AccordionTrigger>
                <AccordionContent className="border rounded-md border-t-transparent p-1">
                    <Input 
                    type="file"
                    accept="image/png, image/jpeg"                    
                    // onChange={(e) => changeCompany(e.currentTarget.value)}
                    className="focus:outline-none bg-gray-100"
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
  )
}

  