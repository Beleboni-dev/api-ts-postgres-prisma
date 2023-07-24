import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
import { IUser } from "../interfaces/IUser";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body as IUser;

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};
