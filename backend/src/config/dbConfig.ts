let prismaClient;

if (process.env.VERCEL_NODE_ENV === "production") {
  prismaClient = require("../../prisma/generated/client").PrismaClient;
} else {
  prismaClient = require("@prisma/client").PrismaClient;
}

const prisma = new prismaClient();

export default prisma;
