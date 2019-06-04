import { Controller, Get } from '@nestjs/common';
import { BillsService } from './bills.service';
import { Bill } from './interfaces/bill.interface';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Get('all')
  async findAll(): Promise<Bill[]> {
    return this.billsService.findAll();
  }
}
