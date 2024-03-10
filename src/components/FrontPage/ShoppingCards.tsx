import { Button } from "../ui/button"

const SHOPPING_CARDS = [
    {
        image: './shopping-card-black.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
    {
        image: './shopping-card-white.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
    {
        image: './shopping-card-ocean.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
    {
        image: './shopping-card-chrome.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
    {
        image: './shopping-card-yellow.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
    {
        image: './shopping-card-blue.svg',
        name: 'Matte Black',
        price: 3000,
        description: 'Standard Black Card',
        total: 1
    },
] as const

export default function ShoppingCards() {
    return (
        <section className="py-12">
            <div className="flex flex-col gap-4">
                <h1 className="font-[700] text-5xl text-center">SHOPPING CARD</h1>
                <p className="text-customTextGray text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div className="flex flex-row flex-wrap gap-x-8 gap-y-20 items-center justify-center py-12">
                {SHOPPING_CARDS.map((c,i) => {
                    return <ShoppingCard {...c} key={i} />
                })}
            </div>
        </section>
    )
}

type ShoppingCardProps = {
    image: string;
    name: string;
    description: string;
    price: number;
    total:number
}

function ShoppingCard({image, name, price, description, total}:ShoppingCardProps) {
    return (
        <div>
            <p className="font-[600] text-[20px]">{name}</p>
            <div>
                <img src={image} width={300}  />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between w-[200px] font-[600]">
                    <p className="text-[20px]">Php {price.toFixed(2)}</p>
                    <p>{total}</p>
                </div>
                <p className="text-customTextGray text-lg">{description}</p>
                <div className="flex flex-row items-center gap-4 font-[500]">
                    <Button variant="icon" size="icon">
                        <img src="./cart-icon.svg" />
                    </Button>
                    <p>Add To Cart</p>
                </div>
            </div>
        </div>
    )
}