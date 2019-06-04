import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsController } from './bills/bills.controller';
import { BillsService } from './bills/bills.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';

const DB_URI = new ConfigService(path.resolve(__dirname + '/config/.env')).get(
  'DB_URI',
);

@Module({
  imports: [
    MongooseModule.forRoot(DB_URI, {
      useNewUrlParser: true,
    }),
    ConfigModule,
  ],
  controllers: [AppController, BillsController],
  providers: [AppService, BillsService],
})
export class AppModule {}
