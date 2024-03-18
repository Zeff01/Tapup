export default function Showcase() {
    return (
        <section className="pt-52 py-28 flex justify-end">            
            <div className="bg-customGray rounded-tl-[20px] rounded-bl-[20px] w-full md:w-showcase relative flex flex-col justify-end p-4 sm:p-8 md:p-12 lg:p-16 px-12 sm:px-20 md:px-28  lg:px-48">
                <img src="./black-card-forward.svg" width={350} className="scale-[0.8] sm:scale-100 z-10 absolute  right-[100px] sm:right-[200px] md:right-[300px] lg:right-[440px] -top-[0] -translate-y-1/2" />     
                <img src="./chrome-card-forward.svg"  width={350} className="scale-[0.76] sm:scale-95 -translate-y-[53%] absolute right-[0px] sm:right:[15px] md:right-[30px] lg:right-[50px] top-0"  />
                <div className="flex flex-col pl-16 md:pl-0 gap-y-10 md:flex-row gap-x-12 md:gap-x-16 lg:gap-x-20 pt-24 text-sm sm:text-base">
                    <div className="w-[300px] relative">
                        <div className="absolute -translate-x-[130%] bg-customBlack flex items-center justify-center rounded-sm w-[50px] aspect-square shadow-lg">
                            <img src="./sound-icon.svg" width={24} height={24} />
                        </div>
                        <div className="flex-grow flex flex-col gap-2">
                            <h2 className="font-[500] text-3xl">Access Card</h2>
                            <p className="text-customTextGray w-4/6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div className="w-[300px] relative">
                        <div className="absolute -translate-x-[130%] bg-customGreen flex items-center justify-center rounded-sm w-[50px] aspect-square shadow-lg">
                            <img src="./sound-icon.svg" width={24} height={24} />
                        </div>
                        <div className="flex-grow flex flex-col gap-2">
                            <h2 className="font-[500] text-3xl">Lorem Ipsum</h2>
                            <p className="text-customTextGray w-4/6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>     
                    <div className="w-[300px] relative">
                        <div className="absolute -translate-x-[130%] bg-customBlack flex items-center justify-center rounded-sm w-[50px] aspect-square shadow-lg">
                            <img src="./sound-icon.svg" width={24} height={24} />
                        </div>
                        <div className="flex-grow flex flex-col gap-2">
                            <h2 className="font-[500] text-3xl">Lorem Ipsum</h2>
                            <p className="text-customTextGray w-4/6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>     
                </div>
                
            </div>
        </section>
    )
}


