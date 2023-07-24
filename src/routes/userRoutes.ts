import express, { Router } from "express";
import { createUser, getUsers } from "../controllers/userController";

const router: Router = express.Router();

// Rota para criar um novo usuário
router.post("/users", createUser);

// Rota para listar todos os usuários
router.get("/users", getUsers);

export default router;
