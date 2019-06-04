import { Controller, Get, Post, Body } from '@nestjs/common';
import { BillsService } from './bills.service';
import { Bill } from './interfaces/bill.interface';
import { CreateBillDto } from './dto/create-bill.dto';

@Controller('bills')
export class BillsController {
  constructor(private readonly billsService: BillsService) {}

  @Post('add')
  async create(@Body() createBillDto: CreateBillDto) {
    await this.billsService.create(createBillDto);
  }

  @Get('all')
  async findAll(): Promise<Bill[]> {
    return this.billsService.findAll();
  }
}
