import Service from "./Service"

const ServicesArr = [
    {
        imageURL: '/arc-reactor.svg',
        title: 'Arc Reactor',
        description: 'a powerful battery made by tony stark to power his suit.',
        prices: [
            {
                price: 1000,
                name: 'regular'
            },
            {
                price: 2000,
                name: 'special' 
            }
        ]
    },
    {
        imageURL: '/unibeam.svg',
        title: 'Unibeam',
        description: 'a powerful laser device capable of melting any steel and very energy efficient!.',
        prices: [
            {
                price: 1000,
                name: 'low power'
            },
            {
                price: 2000,
                name: 'M5 extra strong' 
            }
        ]
    },
    {
        imageURL: '/repulsor.svg',
        title: 'Repulsor',
        description: 'A device capable of repulsing any attack directed to the wearer, 10 months warranty included.',
        prices: [
            {
                price: 3000,
                name: 'regular'
            },
            {
                price: 4000,
                name: 'special' 
            }
        ]
    }
]


export default function Services() {
    return (
        <section className="pl-16 pr-8 py-4">
            <h3 className="text-2xl pb-4">Services</h3>
            <div className="flex flex-row justify-between">
                {ServicesArr.map(s => {
                    return (
                        <Service key={s.imageURL} {...s} />
                    )
                })}
            </div>
        </section>
    )
}