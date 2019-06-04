import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';
import { BillSchema } from './schemas/bill.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bill', schema: BillSchema }])],
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillsModule {}
