import 'reflect-metadata';
import express from 'express';
import './database';

import { router } from './routes';
import createPersonalConnection from './database';

createPersonalConnection();
const app = express();

app 
    .use(express.json())
    .use(router)

export { app };