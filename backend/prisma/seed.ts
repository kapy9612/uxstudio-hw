import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const contactData: Prisma.ContactCreateInput[] = [
  {
    name: "Timothy Lewis",
    email: "timothy@prisma.io",
    phone: "+36 01 234 5678",
    avatar: null,
  },
  {
    name: "Sarah Wright",
    email: "sarah@prisma.io",
    phone: "+36 02 134 5678",
    avatar: null,
  },
  {
    name: "Lucy Jones",
    email: "lucy@prisma.io",
    phone: "+36 03 214 5678",
    avatar: null,
  },
  {
    name: "Jake Perez",
    email: "jake@prisma.io",
    phone: "+36 04 231 5678",
    avatar: null,
  },
  {
    name: "Adebayo Rodriguez",
    email: "adebayo@prisma.io",
    phone: "+36 05 234 1678",
    avatar: null,
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of contactData) {
    const contact = await prisma.contact.create({
      data: u,
    });
    console.log(`Created user with id: ${contact.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
