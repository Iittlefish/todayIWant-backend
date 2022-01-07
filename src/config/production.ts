// src/config/production.ts
// Entries
import { Shop, Tag } from '@/entity';
  // Migrations
import { ConnectionOptions } from 'typeorm';
  
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
  