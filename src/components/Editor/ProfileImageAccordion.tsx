import { Input } from "../ui/input";
import { CgProfile } from "react-icons/cg";
import { ChangeEvent } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useCustomCard } from "@/hooks/useCustomCard";


// TODO: complete this
export default function ProfileImageAccordion() {
    
    const changeProfile = useCustomCard(s => s.changeProfile)

    function changeProfileHandler(e: ChangeEvent<HTMLInputElement>) {
        const val : FileList|null = e.currentTarget.files
        if (val) {
            const file = val[0]
            if (file && file.size > 5_000_000) {
                console.error('file too large!')
            }
            if (file) {
                console.log(file.type)
                const reader =  new FileReader()
                reader.onload = event => {
                    const fileAsDataURL = event.target?.result
                    if (typeof fileAsDataURL === 'string') {
                        changeProfile(fileAsDataURL)
                    }
                }
                reader.readAsDataURL(file)
            }
        }    
    }

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
                    onChange={changeProfileHandler}
                    className="focus:outline-none bg-gray-100"
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
  )
}

  