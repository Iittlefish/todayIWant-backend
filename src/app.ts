import express, { Express, Request, Response } from "express";
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import { TagInfrastructure, ShopInfrastructure} from "./infrastructure";
import { ConnectionOptions, createConnection } from "typeorm";
import { RegisterRoutes } from '@/routes';


const app = express();
export default function appInit(typeormConfig:ConnectionOptions):Promise<Express>{
  return new Promise(async (resolve)=>{
    app.use(cors({
      origin: '*',
      methods: ['GET', 'POST', 'PATCH', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }));
    // Use body parser to read sent json payloads
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    const swaggerHtml = swaggerUi.generateHTML(await import('./swagger.json'));
    app.use('/docs', swaggerUi.serve, (_: Request, res: Response) => res.send(swaggerHtml));

    await createConnection(typeormConfig);

    TagInfrastructure.Init();
    ShopInfrastructure.Init();
    RegisterRoutes(app);

    return resolve(app);
  })
};
