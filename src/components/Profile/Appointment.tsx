"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Appointment() {
    const [date, setDate] = React.useState<Date>()

    return (
        <section className="flex flex-col gap-y-6 py-12 pl-16">
            <h3>Make an appointment</h3>
            <div className="flex flex-row gap-x-12">
                <div className="flex flex-col gap-y-4">
                <label>Date:</label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal border-gray-200",
                            !date && "text-muted-foreground"
                        )}
                        >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        />
                    </PopoverContent>
                </Popover>
                </div>
                <div className="flex flex-col gap-y-4">
                    <label>Hours:</label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="a">09:00am - 10:00am</SelectItem>
                            <SelectItem value="b">10:00am - 11:00am</SelectItem>
                            <SelectItem value="c">10:00am - 11:00am</SelectItem>
                            <SelectItem value="d">11:00am - 12:00pm</SelectItem>
                            <SelectItem value="e">01:00pm - 02:00pm</SelectItem>
                            <SelectItem value="f">02:00pm - 03:00pm</SelectItem>
                            <SelectItem value="g">03:00pm - 04:00pm</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button className="w-fit bg-customBlack text-customGray">Set appointment</Button>
        </section>
    )
}