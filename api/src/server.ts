import 'reflect-metadata';
import express from 'express';
import './database';

import { router } from './routes';

const app = express();

app 
    .use(express.json())
    .use(router)


app
    .get("/", (_req, res) => {
        return res.json({ message: "Hello World - NLW4" });
    })

    .post("/", (_req, res) => {
        return res.json({ message: "Os dados foram salvos com sucesso!" });
    });


app.listen(3001, () => {
    console.log("Server is running!")
})
