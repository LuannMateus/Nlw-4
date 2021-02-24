import { Router } from 'express';
import { SurveyController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const router = Router();

const userMethods = new UserController();
const surveyMethods = new SurveyController();

router.post("/users", userMethods.create)

router.post("/surveys", surveyMethods.create)

router.get("/surveys", surveyMethods.show)


export { router };