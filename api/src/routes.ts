import { Router } from 'express';
import { SurveyController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
import { SendMailController } from './controllers/SendMailController'

const router = Router();

const userMethods = new UserController();
const surveyMethods = new SurveyController();
const sendMailMethods = new SendMailController();

router.get("/surveys", surveyMethods.show)
router.post("/surveys", surveyMethods.create)

router.get("/users", userMethods.getAllUsers)
router.post("/users", userMethods.create)



router.post("/sendMail", sendMailMethods.execute)


export { router };