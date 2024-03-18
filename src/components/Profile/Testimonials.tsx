import Testimony from "./Testimony"

const Testimonies = [
    {
        id: 'a',
        imageURL: '/t-thor.svg',
        stars: 5,
        name: 'John Doe',
        testimony: 'Iron Man was more than just a man in a suit; he was a beacon of innovation and bravery. From our first encounter, I knew Tony Stark was destined for greatness. His sacrifices and unwavering determination to protect those he loved set him apart.'
    },
    {
        id: 'b',
        imageURL: '/t-captain.svg',
        stars: 1,
        name: 'John Doe',
        testimony: "Tony Stark was not merely a man wearing a suit; he symbolized innovation and courage. From our initial meeting, it was evident to me that Tony Stark was bound for extraordinary achievements. His willingness to make sacrifices and his relentless resolve to safeguard his loved ones distinguished him."
    },
    {
        id: 'c',
        imageURL: '/t-iron.svg',
        stars: 3,
        name: 'John Doe',
        testimony: 'Tony Stark transcended being merely a man in a suit; he embodied innovation and valor. Upon our first meeting, it was clear to me that Tony Stark was destined for remarkable achievements. His readiness to sacrifice and his steadfast determination to shield those dear to him set him apart.'
    }
]


export default function Testimonials() {
    return (
        <section className="pl-16 pr-8">
            <h3 className="font-semibold text-xl pt-8 pb-16">Testimonials</h3>
            <div className="flex flex-col gap-y-12">
                {
                    Testimonies.map(t => {
                        return (
                            <Testimony key={t.id} {...t} />
                        )
                    })
                }
            </div>
        </section>
    )
}