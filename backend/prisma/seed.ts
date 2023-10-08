import { Prisma, PrismaClient } from "./generated/client";
import ContactCreateInput = Prisma.ContactCreateInput;

const prisma = new PrismaClient();

const contactData: ContactCreateInput[] = [
  {
    name: "Timothy Lewis",
    email: "timothy@prisma.io",
    phone: "+36 01 234 5678",
    avatar:
      "https://uxstudio-challenge-bucket.s3.eu-north-1.amazonaws.com/Timothy.png",
  },
  {
    name: "Sarah Wright",
    email: "sarah@prisma.io",
    phone: "+36 02 134 5678",
    avatar:
      "https://uxstudio-challenge-bucket.s3.eu-north-1.amazonaws.com/Sarah.png",
  },
  {
    name: "Lucy Jones",
    email: "lucy@prisma.io",
    phone: "+36 03 214 5678",
    avatar:
      "https://uxstudio-challenge-bucket.s3.eu-north-1.amazonaws.com/Lucy.png",
  },
  {
    name: "Jake Perez",
    email: "jake@prisma.io",
    phone: "+36 04 231 5678",
    avatar:
      "https://uxstudio-challenge-bucket.s3.eu-north-1.amazonaws.com/Jake.png",
  },
  {
    name: "Adebayo Rodriguez",
    email: "adebayo@prisma.io",
    phone: "+36 05 234 1678",
    avatar:
      "https://uxstudio-challenge-bucket.s3.eu-north-1.amazonaws.com/Adebayo.png",
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
