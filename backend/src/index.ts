import { PrismaClient } from "@prisma/client";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

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

app.get("/api/contact", async (req, res, next) => {
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
    const contact = await prisma.contact.delete({
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

const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`),
);
