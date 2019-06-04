import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Bill } from './interfaces/bill.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBillDto } from './dto/create-bill.dto';

@Injectable()
export class BillsService {
  constructor(@InjectModel('Bill') private readonly billModel: Model<Bill>) {}

  async create(createBillDto: CreateBillDto): Promise<Bill> {
    const createdBill = new this.billModel(createBillDto);
    return await createdBill.save();
  }

  async findAll(): Promise<Bill[]> {
    return await this.billModel.find().exec();
  }
}
