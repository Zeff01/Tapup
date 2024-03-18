import Stars from "./Stars";

export interface TestimonyProps {
    id: string;
    imageURL: string;
    stars: number;
    name: string;
    testimony: string;
}

export default function Testimony({imageURL, stars, name, testimony}:TestimonyProps) {
    return (
        <div className="flex flex-row gap-x-6">
            <div>
                <img src={imageURL} />
            </div>
            <div className="flex flex-col gap-2 text-black">
                <Stars stars={stars} />
                <div>
                    <p className="font-bold text-lg">{name}</p>
                    <p className="w-[550px]">{testimony}</p>
                </div>
            </div>
        </div>
    )
}

