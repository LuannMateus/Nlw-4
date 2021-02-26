import { request, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

import { UsersRepository } from '../repositories/UsersRepository';

class UserController {

    async create(req: Request, res: Response) {
        const { name, email } = req.body;

        const schema = yup.object().shape({
            name: yup.string().required("Nome é obrigatório!"),
            email: yup.string().email("Email inválido!"),
        });

        try {

            await schema.validate(req.body, { abortEarly: false });
        } catch (err) {
            throw new AppError(err)
        }

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
            throw new AppError(error)
        }


    }
}

export { UserController };
