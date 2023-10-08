import { NextFunction, Request, Response } from "express";
import * as contactService from "../services/contactService";

export default {
  create: async (req: Request, res: Response, next: NextFunction) => {
    const { name, phone, email, avatar } = req.body;

    if (!name) {
      res.status(400).json({ message: `Name is required.` });
      return;
    }

    try {
      await contactService.createContact({
        name,
        email,
        phone,
        avatar,
      });
      res.status(201).json({ message: "Successfully created." });
    } catch (e) {
      res.json(e);
      next(e);
    }
  },

  getAll: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const contacts = await contactService.getContacts();
      res.status(200).json(contacts);
    } catch (e) {
      res.json(e);
      next(e);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    const { id }: { id?: number } = req.params;

    try {
      const contact = await contactService.getContactById(id!);

      if (!contact) {
        res.status(404).json({ message: `There is no contact with id: ${id}` });
        return;
      }

      res.json(contact);
    } catch (e) {
      res.json(e);
      next(e);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    const { id }: { id?: number } = req.params;
    const { name, phone, email, avatar } = req.body;

    try {
      const contact = await contactService.updateContact(id!, {
        name,
        email,
        avatar,
        phone,
      });

      res.json(contact);
    } catch (e) {
      res.json({ error: `Post with ID ${id} does not exist in the database` });
      next(e);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    const { id }: { id?: number } = req.params;
    try {
      await contactService.deleteContact(id!);

      res.status(201).send({ message: "Successfully deleted." });
    } catch (e) {
      res.json(e);
      next(e);
    }
  },
};
