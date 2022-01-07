import { ConnectionOptions } from 'typeorm';
import {Tag, Shop} from '@/entity' ;
 
  export default {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'user',
    password: '1234',
    database: 'todayIwant',
    dropSchema: false,
    entities: [Shop,Tag],
    migrationsRun: false,
    extra: {
      charset: 'utf8_unicode_ci',
    },
  } as ConnectionOptions;