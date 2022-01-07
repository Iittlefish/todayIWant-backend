import { ConnectionOptions } from 'typeorm';
import * as prodConfig from './production';

export default{
    ...prodConfig,
    dropSchema : true,
    migrationsRun: true,
    logging: 'all',
    "migration" : ['@/migration/*js'],
    "cli": {
        "migrationsDir": "@/migration"
    },
}  as unknown as ConnectionOptions;