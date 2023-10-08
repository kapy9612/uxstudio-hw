import { execSync } from "child_process";
import "dotenv/config";

const schemaPath: string = `prisma/schema.${process.env.NODE_ENV}.prisma`;

try {
  // Execute the Prisma generate command with the dynamically determined schema path
  if (process.env.NODE_ENV === "production") {
    execSync(`prisma generate --schema=${schemaPath}`, { stdio: "inherit" });
    console.log("Prisma Client generated successfully!");
  }
} catch (error: unknown) {
  // Log an error message if the command fails
  if (error instanceof Error) {
    console.error("Error generating Prisma Client:", error.message);
  }
  process.exit(1);
}
