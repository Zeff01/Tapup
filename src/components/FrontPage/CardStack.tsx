
export default function CardStack() {
    return (
        <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[300px]">
            <img src="./yellow-card.svg" width={300}  className="z-10 absolute -left-16" />
            <img src="./ocean-card.svg"  width={300}  className="z-20 absolute -top-24 left-0" />
            <img src="./blue-card.svg"  width={300}  className="z-30 absolute left-16" />
            <img src="./card-shadow.svg"  width={300}  className="z-5 absolute -left-6 top-[220px]" />
            
        </div>
    )
}