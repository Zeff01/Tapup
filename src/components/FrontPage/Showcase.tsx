export default function Showcase() {
    return (
        <section className="pt-52 py-28 flex justify-end">            
            <div className="bg-customGray rounded-tl-[20px] rounded-bl-[20px] h-[350px] w-showcase relative flex flex-col justify-end p-16 px-48">
                <img src="./black-card-forward.svg" width={350} className=" absolute right-[440px] -top-[0] -translate-y-1/2" />     
                <img src="./chrome-card-forward.svg"  width={350} className="scale-95 -translate-y-[53%] absolute right-[50px] top-0"  />
                <div className="flex flex-row gap-x-20">
                    <div className="w-[300px] relative">
                        <div className="absolute -translate-x-[130%] bg-customBlack flex items-center justify-center rounded-sm w-[50px] aspect-square shadow-lg">
                            <img src="./sound-icon.svg" width={24} height={24} />
                        </div>
                        <div className="flex-grow flex flex-col gap-2">
                            <h2 className="font-[500] text-3xl">Access Card</h2>
                            <p className="text-customTextGray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div className="w-[300px] relative">
                        <div className="absolute -translate-x-[130%] bg-customGreen flex items-center justify-center rounded-sm w-[50px] aspect-square shadow-lg">
                            <img src="./sound-icon.svg" width={24} height={24} />
                        </div>
                        <div className="flex-grow flex flex-col gap-2">
                            <h2 className="font-[500] text-3xl">Lorem Ipsum</h2>
                            <p className="text-customTextGray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>     
                    <div className="w-[300px] relative">
                        <div className="absolute -translate-x-[130%] bg-customBlack flex items-center justify-center rounded-sm w-[50px] aspect-square shadow-lg">
                            <img src="./sound-icon.svg" width={24} height={24} />
                        </div>
                        <div className="flex-grow flex flex-col gap-2">
                            <h2 className="font-[500] text-3xl">Lorem Ipsum</h2>
                            <p className="text-customTextGray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>     
                </div>
                
            </div>
        </section>
    )
}


