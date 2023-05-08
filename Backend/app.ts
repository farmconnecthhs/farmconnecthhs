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

dotenv.config();

const apiDefinition = require('./swagger/api-docs.json');

const app: Application = express();

const corsOptions = {
  // origin: ["http://localhost:4200", "http://localhost:3001"],
  // optionsSuccessStatus: 200
};

const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FarmConnect API',
      version: '0.1.0',
      description: 'FarmConnect API application',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'FarmConnect',
        url: 'https://FarmConnect.com',
        email: 'cms@farmconnect.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
  },
  apis: [
    './api/**/*.ts',
    './api/users/routes/*.ts',
    './swagger/components/user.yaml',
    './swagger/components/error.yaml',
  ],
};
const specs = swaggerJsdoc(options);
// dbInit();

app.use(cors(corsOptions));
app.use(express.json());
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
