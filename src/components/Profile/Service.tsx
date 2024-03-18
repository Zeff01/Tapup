
type Prices = {
    price: number;
    name: string;
}

export interface ServiceProps {
    imageURL: string;
    title: string;
    description: string;
    prices: Prices[]
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Service({imageURL, title, description, prices}:ServiceProps) {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <img src={imageURL} width={200} height={200} />  
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                    <DialogTitle className="text-2xl">{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-col gap-y-6">
                        <img src={imageURL} />
                        <div>
                            <p className="font-semibold text-center text-xl">Prices</p>
                            <div>   
                                {prices.map(p => {
                                    return (
                                        <div key={p.name} className="flex flex-row justify-between">
                                            <div>{p.name}</div>
                                            <div className="font-semibold">php {p.price.toLocaleString()}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>   
            <p className="font-semibold text-lg">{title}</p>
              
        </div>
    )
}