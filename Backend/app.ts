import cors from 'cors';
/* eslint-disable import/first */
/* eslint-disable import/newline-after-import  */
/* eslint-disable import/order */
import dotenv from 'dotenv';

dotenv.config();

import express, { Application, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import router from './api/routes';

import { options } from './swagger/apiOptions';
import DBInit from './db/config/DBInit';

const app: Application = express();

const corsOptions = {
  origin: [
    'http://localhost:4200',
    'http://localhost:3000',
    'http://localhost:5555',
  ],
  optionsSuccessStatus: 200,
};

const specs = swaggerJsdoc(options);

app.use(cors(corsOptions));
app.use(express.json());

DBInit();
// app.use(express.urlencoded({ extended: false }));

const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Worlds!');
});

app.use('/api/v1', router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  return console.log(`Example app listening at http://localhost:${port}`);
});
