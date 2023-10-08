import { execSync } from "child_process";
import "dotenv/config";

const schemaPath: string = `prisma/schema.${process.env.VERCEL_NODE_ENV}.prisma`;
console.log(`NODE_ENV: ${process.env.VERCEL_NODE_ENV}`);

try {
  // Execute the Prisma generate command with the dynamically determined schema path
  if (process.env.VERCEL_NODE_ENV === "production") {
    execSync(`prisma generate --schema=${schemaPath}`, { stdio: "inherit" });
    execSync(`prisma migrate dev --name init`, { stdio: "inherit" });
    console.log("Prisma Client generated successfully!");
  }
} catch (error: unknown) {
  // Log an error message if the command fails
  if (error instanceof Error) {
    console.error("Error generating Prisma Client:", error.message);
  }
  process.exit(1);
}
