import { Router } from 'express';
import { SurveyController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';
import { SendMailController } from './controllers/SendMailController'
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const userMethods = new UserController();
const surveyMethods = new SurveyController();
const sendMailMethods = new SendMailController();
const answerController = new AnswerController;
const npsController = new NpsController;


router.get("/surveys", surveyMethods.show)
router.post("/surveys", surveyMethods.create)

router.get("/users", userMethods.getAllUsers)
router.post("/users", userMethods.create)



router.post("/sendMail", sendMailMethods.execute)

router.get("/answer/:value", answerController.execute)

router.get("/nps/:survey_id", npsController.execute)


export { router };