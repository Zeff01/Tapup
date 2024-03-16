
export default function Introduction() {
    return (
        <section className="py-12">
            <div className="flex flex-col justify-center items-center w-full gap-y-6">
                <p className="text-4xl font-[500]">Ready to get started?</p>
                <img src="./line.svg" width={300} className="translate-x-16" />
                <p className="max-w-[650px] leading-4 text-center">Tap Up's Individual, Corporation, and Enterprise packages are designed to meet you where you are and take your professional networking to the next level.</p>
                <img src="./worker.svg" />
            </div>
        </section>
    )
}