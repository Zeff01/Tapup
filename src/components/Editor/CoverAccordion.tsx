import { Input } from "../ui/input";
import { SlPicture } from "react-icons/sl";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useCustomCard } from "@/hooks/useCustomCard";
import { ChangeEvent } from "react";
import { elementOutlineHandler } from "@/lib/elementOutlineHandler";



// TODO: complete this
export default function CoverAccordion() {
    const changeCover = useCustomCard(s => s.changeCover)
    const hoverHandler = elementOutlineHandler('c-cover', 2)

    function changeCoverHandler(e: ChangeEvent<HTMLInputElement>) {
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
                        changeCover(fileAsDataURL)
                    }
                }
                reader.readAsDataURL(file)
            }
        }    
    }

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger
                {...hoverHandler}
                >
                    <p className="flex flex-row items-center gap-4">
                        <span className="text-[#b4b4b4]">
                            <SlPicture />
                        </span>
                        <span>Cover</span>
                    </p>
                    
                </AccordionTrigger>
                <AccordionContent className="border rounded-md border-t-transparent p-1">
                    <label className="relative w-full h-full">
                    <p  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Choose File</p>
                    <Input
                    type="file"
                    accept="image/png, image/jpeg"                    
                    onChange={changeCoverHandler}
                    className="invisible"
                    />
                    </label>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
  )
}

  