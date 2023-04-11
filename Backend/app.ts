import dotenv from 'dotenv';
dotenv.config();

//import dbInit from "./db/init";
import express, {Application, Request, Response} from "express";
import cors from "cors";
import router from "./api/routes";

const app: Application = express();

const corsOptions = {
  // origin: ["http://localhost:4200", "http://localhost:3001"],
  // optionsSuccessStatus: 200
}

// dbInit();

app.use(cors(corsOptions));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));

const port: number = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send("Hello Worlds!");
});

app.use('/api/v1', router);

app.listen(port, () => {
  return console.log(`Example app listening at http://localhost:${port}`);
});