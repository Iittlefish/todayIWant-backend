import 'module-alias/register';
import 'reflect-metadata';

import * as ormConfig from '@/config/config';
import appInit from './app';
import { ConnectionOptions } from 'typeorm';
import {Express} from 'express';

import { TagInfrastructure } from './infrastructure';

const typeormConfig = ormConfig;
const port = 3000;

appInit(typeormConfig.default as ConnectionOptions).then(async (app:Express)=>{
  app.listen(port);
  console.log(`Example app listening at http://localhost:${port}`);
}).catch((err) => {
  console.error(err);
});

