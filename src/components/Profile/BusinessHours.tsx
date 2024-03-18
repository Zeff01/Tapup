
export default function BusinessHours() {
    return (
        <section  className="pl-16 pr-8 py-20">
            <h3 className="text-center font-semibold text-xl">Business Hours</h3>
            <div className="bg-customBlack p-8 text-customGray h-[200px] flex flex-col flex-wrap gap-y-2     items-center justify-center">
                <div className="flex flex-row justify-between text-lg w-[200px]">
                    <p>Sunday:</p>
                    <p>Closed</p>
                </div>
                <div className="flex flex-row justify-between text-lg w-[200px]">
                    <p>Monday:</p>
                    <p>09:00 - 19:00</p>
                </div>
                <div className="flex flex-row justify-between text-lg w-[200px]">
                    <p>Tuesday:</p>
                    <p>09:00 - 19:00</p>
                </div>
                <div className="flex flex-row justify-between text-lg w-[200px]">
                    <p>Wednesday:</p>
                    <p>09:00 - 19:00</p>
                </div>
                <div className="flex flex-row justify-between text-lg w-[200px]">
                    <p>Thursday:</p>
                    <p>09:00 - 19:00</p>
                </div>
                <div className="flex flex-row justify-between text-lg w-[200px]">
                    <p>Friday:</p>
                    <p>09:00 - 19:00</p>
                </div>
                <div className="flex flex-row justify-between text-lg w-[200px]">
                    <p>Saturday:</p>
                    <p>09:00 - 19:00</p>
                </div>
            </div>
        </section>
    )
}