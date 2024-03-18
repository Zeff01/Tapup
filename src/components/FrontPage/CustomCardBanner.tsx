import { Button } from "../ui/button"

const CUSTOM_CARDS = [
    {
        image: './custom-card-table.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
    {
        image: './custom-card-building.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
    {
        image: './custom-card-anya.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
    {
        image: './custom-card-planet.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
] as const

export default function CustomCardBanner() {
    return (
        <section className="flex flex-col items-center relative py-[100px] px-4">
            <div 
            style={{background:'url("./custom-banner.svg")', backgroundSize:'cover'}}
            className="h-[400px] w-screen absolute -translate-y-[100px]"
            ></div>
            <div className="relative w-[90%]">
                <img src="./custom-card-banner.svg" width={"100%"} />
                <img src="./custom-card-style.svg" width={"33%"} className="absolute top-0 left-0" />
                <p className="z-10 absolute top-20 right-20 text-customGreen text-3xl font-[700]">Ipsum</p>
                <p className="z-10 absolute bottom-20 left-20 text-[#dadada] text-3xl font-[400]">Loprem Ipsum</p>
            </div>
            <div className="pt-20">
                <div className="flex flex-col gap-1">
                    <h3 className="font-[700] text-5xl">Custom Made Card</h3>
                    <p className="text-customTextGray w-full max-w-[400px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="flex flex-row gap-x-6 py-6 justify-center flex-wrap">
                    {CUSTOM_CARDS.map((c, i) => {
                        return (
                            <CustomCards key={i} {...c} />
                        )
                    })}                    
                </div>
            </div>
        </section>
    )
}

type CustomCardProps = {
    image: string;
    name: string;
    description: string;
    price: number;
    total:number
}

function CustomCards({image, price, description, name, total}:CustomCardProps) {
    return (
        <div>
            <p className="font-[600] text-lg">{name}</p>
            <img src={image} width={250} />
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between w-[200px] font-[600]">
                    <p className="text-[20px]">Php {price.toFixed(2)}</p>
                    <p>{total}</p>
                </div>
                <p className="text-customTextGray text-lg">{description}</p>
                <div className="flex flex-row items-center gap-4 font-[500]">
                    <Button variant="icon" size="icon" className="bg-[#ededed]">
                        <img src="./cart-icon-black.svg"  />
                    </Button>
                    <p>Add To Cart</p>
                </div>
            </div>                            
        </div>
    )
}