import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {

    async create(req: Request, res: Response) {
        const { name, email} = req.body;

        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExists = await usersRepository.findOne({ email })

        if (userAlreadyExists) {
            return res.status(400).json({ error: "User already exists!" })
        }

        const user = usersRepository.create({
            name: name,
            email: email,
        })

        await usersRepository.save(user);

        return res.status(201).json(user);
    }

    async getAllUsers(req: Request, res: Response) {
        const usersRepository = getCustomRepository(UsersRepository);


        try {
            const allUsers = await usersRepository.find({});

            res.json(allUsers)

        } catch (error) {
            res.status(400).json({
                error: "Not possible get all users."
            })
        }

        
    }
}

export { UserController };
