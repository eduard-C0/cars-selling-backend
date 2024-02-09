import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const seedUser = () => {
    prisma.user.create({data: {
        email: "admin@gmail.com",
        password: "admin",
        name: "Admin",
        list_of_cars: {
            create: [
                {
                    type: "VW Golf 1",
                    manufacturing_date: new Date("2000-01-17 11:00:00"),
                    price: 1000,
                    description: "Nu bate nu troncane",
                    sold: false,
                    image: "https://images.unsplash.com/photo-1603615000279-f700d0d11824?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sa3N3YWdlbiUyMGdvbGZ8ZW58MHx8MHx8fDA%3D"
                },
                {
                    type: "VW Golf 3",
                    manufacturing_date: new Date("2010-01-17 11:00:00"),
                    price: 5000,
                    description: "Nu bate nu troncane",
                    sold: true,
                    image: "https://images.unsplash.com/photo-1603615000279-f700d0d11824?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sa3N3YWdlbiUyMGdvbGZ8ZW58MHx8MHx8fDA%3D"
                },
                {
                    type: "VW Golf 2",
                    manufacturing_date: new Date("2008-01-17 11:00:00"),
                    price: 3000,
                    description: "Nu bate nu troncane",
                    sold: false,
                    image: "https://images.unsplash.com/photo-1603615000279-f700d0d11824?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dm9sa3N3YWdlbiUyMGdvbGZ8ZW58MHx8MHx8fDA%3D"
                },
            ]
        },
    }}).then(() => console.log("Vruum Vruum ! :)"))
    .catch(err => console.log(err))
}

seedUser();