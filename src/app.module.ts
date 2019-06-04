import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsController } from './bills/bills.controller';
import { BillsService } from './bills/bills.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { async } from 'rxjs/internal/scheduler/async';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [BillsModule, ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('DB_URI'),
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
