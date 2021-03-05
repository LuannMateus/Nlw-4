import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveyController {

    async create(req: Request, res: Response) {

        const surveysRepository = getCustomRepository(SurveysRepository);
        
        const { title, description } = req.body;
    
        const survey = surveysRepository.create({
            title: title,
            description: description
        })

        await surveysRepository.save(survey);

        res.status(201).json(survey)
    }

    async show(_req: Request, res: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository);

        const allSurveys = await surveysRepository.find({})

        res.status(200).json(allSurveys)
        
    }
    
};

export { SurveyController };