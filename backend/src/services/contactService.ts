import prisma from "../config/dbConfig";

export const createContact = async (contactData: any) => {
  return await prisma.contact.create({
    data: contactData,
  });
};

export const getContacts = async () => {
  return await prisma.contact.findMany();
};

export const getContactById = async (id: number) => {
  return await prisma.contact.findUnique({
    where: { id },
  });
};

export const updateContact = async (id: number, updatedData: any) => {
  return await prisma.contact.update({
    where: { id },
    data: updatedData,
  });
};

export const deleteContact = async (id: number) => {
  return await prisma.contact.delete({
    where: { id },
  });
};
