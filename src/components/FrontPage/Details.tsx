
export default function Details() {
    return (
        <section className="bg-customGray flex flex-col items-center pt-10 pb-20">
            <div className="flex flex-col gap-4 w-[1000px]">
                <div className="font-[500] text-3xl text-customBlack">
                    <h3>
                    ESTABLISHING MEANINGFUL CONNECTIONS
                    </h3>
                    <h3>
                    WITH JUST A SINGLE TAP.
                    </h3>
                </div>
                <p className="w-full max-w-[450px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="flex flex-row w-[1000px] gap-x-4 py-10">
                <div className="basis-1/3 flex flex-col gap-y-4">
                    <div className="bg-customBlack text-white px-6 py-8 rounded-md shadow-md">
                        <p className="text-lg pb-4">Custom Made Card</p>
                        <p className="text-[#b4b4b4]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="bg-white text-customBlack px-6 py-8 rounded-md shadow-md">
                        <p className="text-lg pb-4">Custom Made Card</p>
                        <p className="text-customTextGray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
                <div className="basis-1/3 bg-customBlack text-white px-6 py-8 rounded-md shadow-md flex flex-col justify-end">
                    <p className="text-lg pb-4">Custom Made Card</p>
                    <p className="text-[#b4b4b4]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="basis-1/3 flex flex-col gap-y-4">
                    <div className="flex flex-row gap-x-4 basis-1/2">
                        <div className="bg-white text-customBlack px-4 py-6 rounded-md shadow-md">
                            <p className="text-lg pb-4">Custom Made</p>
                            <p className="text-customTextGray">Lorem Ipsum is simply </p>
                        </div>
                        <div className="bg-customBlack text-white px-4 py-6 rounded-md shadow-md">
                            <p className="text-lg pb-4">Custom Made</p>
                            <p className="text-[#b4b4b4]">Lorem Ipsum is simply </p>
                        </div>
                    </div>
                    <div className=" bg-customBlack text-white px-6 py-8 rounded-md shadow-md basis-1/2">
                        <p className="text-lg pb-4">Custom Made Card</p>
                        <p className="text-[#b4b4b4]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>

            </div>
        </section>
    )
}