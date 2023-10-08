import express from "express";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import bodyParser from "body-parser";
import "dotenv/config";
let cors = require("cors");
const port = process.env.PORT || 3000;

let prismaClient;

if (process.env.VERCEL_NODE_ENV === "production") {
  prismaClient = require("../prisma/generated/client").PrismaClient;
} else {
  prismaClient = require("@prisma/client").PrismaClient;
}

const prisma = new prismaClient();

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  }),
);
app.use(express.json());
app.use(cors());

let s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

app.get("/", (req, res) => {
  res.send("uxstudio challenge API running 🥳");
});
app.post(`/api/contact`, async (req, res, next) => {
  const { name, phone, email, avatar } = req.body;

  if (!name) {
    res.status(400).json({ message: `Name is required.` });
    return;
  }

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        avatar,
      },
    });
    res.status(201).json({ message: "Successfully created." });
  } catch (e) {
    res.json(e);
    next(e);
  }
});

app.post("/api/upload", async (req, res) => {
  const { fileName, fileContent } = req.body;

  if (!fileName || !fileContent) {
    return res.status(400).send("File name and content are required");
  }

  // Strip the data: URL prefix if it exists
  const base64Data = fileContent.replace(/^data:image\/\w+;base64,/, "");

  // Decode Base64 to binary data
  const binaryData = Buffer.from(base64Data, "base64");

  const params = {
    Bucket: "uxstudio-challenge-bucket",
    Key: fileName,
    Body: binaryData,
    ContentType: "image",
    ACL: "public-read",
  };

  try {
    // Upload to S3
    await s3.send(new PutObjectCommand(params));

    // On success, return file URL
    const fileUrl = `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;
    res.status(200).send({
      message: "File uploaded successfully!",
      fileUrl: fileUrl,
    });
  } catch (err) {
    // Handle errors
    console.error("Error uploading file:", err);
    res.status(500).send("Error uploading file");
  }
});

app.get("/api/contact", async (_req, res, next) => {
  try {
    const users = await prisma.contact.findMany();
    res.json(users);
  } catch (e) {
    res.json(e);
    next(e);
  }
});

app.get(`/api/contact/:id`, async (req, res, next) => {
  const { id }: { id?: string } = req.params;

  try {
    const contact = await prisma.contact.findUnique({
      where: { id: Number(id) },
    });
    if (!contact) {
      res.status(404).json({ message: `There is no contact with id: ${id}` });
      return;
    }
    res.json(contact);
  } catch (e) {
    res.json(e);
    next(e);
  }
});

app.put("/api/contact/:id", async (req, res) => {
  const { id } = req.params;
  const { name, phone, email, avatar } = req.body;

  try {
    const contact = await prisma.contact.update({
      where: { id: Number(id) },
      data: {
        name,
        email,
        avatar,
        phone,
      },
    });

    res.json(contact);
  } catch (error) {
    res.json({ error: `Post with ID ${id} does not exist in the database` });
  }
});

app.delete(`/api/contact/:id`, async (req, res, next) => {
  const { id } = req.params;
  try {
    await prisma.contact.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(201).send({ message: "Successfully deleted." });
  } catch (e) {
    res.json(e);
    next(e);
  }
});

app.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`),
);
