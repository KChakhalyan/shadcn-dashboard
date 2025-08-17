'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area"
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns"
import { Calendar } from "./ui/calendar";

type Todo = {
    id: number;
    label: string;
};

const todos: Todo[] = [
    { id: 1, label: "Buy groceries" },
    { id: 2, label: "Finish React project" },
    { id: 3, label: "Call the dentist" },
    { id: 4, label: "Read 20 pages of a book" },
    { id: 5, label: "Go for a 30 min walk" },
    { id: 6, label: "Clean the workspace" },
    { id: 7, label: "Write blog post draft" },
    { id: 8, label: "Prepare for tomorrow’s meeting" },
    { id: 9, label: "Do laundry" },
    { id: 10, label: "Practice coding interview problems" },
    { id: 11, label: "Update LinkedIn profile" },
    { id: 12, label: "Research fullstack job requirements" },
    { id: 13, label: "Cook healthy dinner" },
    { id: 14, label: "Water the plants" },
    { id: 15, label: "Review pull requests on GitHub" },
    { id: 16, label: "Plan weekend activities" },
    { id: 17, label: "Organize project files" },
    { id: 18, label: "Reply to important emails" },
    { id: 19, label: "Back up laptop files" },
    { id: 20, label: "Meditate for 10 minutes" }
];



const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)
    return (
        <div className="">
            <h1 className="text-lg font-medium mb-4">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="cursor-pointer w-full">
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={date => {
                            setDate(date)
                            setOpen(false)
                        }}

                        required
                    />
                </PopoverContent>
            </Popover>
            {/* // LIST */}
            <ScrollArea className="max-h-[400px] mt-4 overflow-auto">
                {/* LIST ITEM */}

                {todos.map((item) => (
                    <Card className="px-4 mb-2" key={item.id}>
                        <div className="flex items-center gap-4 ">
                            <Checkbox id={`${item.id}`} />
                            <label htmlFor={`${item.id}`} className="cursor-pointer">{item.label}</label>
                        </div>
                    </Card>
                ))}


            </ScrollArea>
        </div>
    )
}
export default TodoList