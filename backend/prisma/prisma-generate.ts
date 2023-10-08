import { execSync } from "child_process";
import "dotenv/config";

// Retrieve the NODE_ENV, defaulting to 'development' if it is not set
const env: string = process.env.NODE_ENV || "development";
const schemaPath: string = `prisma/schema.${env}.prisma`;

console.log(`Generating Prisma Client using ${schemaPath}...`);

try {
  // Execute the Prisma generate command with the dynamically determined schema path
  execSync(`prisma generate --schema=${schemaPath}`, { stdio: "inherit" });
  console.log("Prisma Client generated successfully!");
} catch (error: unknown) {
  // Log an error message if the command fails
  if (error instanceof Error) {
    console.error("Error generating Prisma Client:", error.message);
  }
  process.exit(1);
}
