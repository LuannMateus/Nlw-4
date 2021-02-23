import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const userMethods = new UserController()

router.post("/users", userMethods.create)

export { router };