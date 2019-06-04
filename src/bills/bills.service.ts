import { Injectable } from '@nestjs/common';
import { Bill } from './interfaces/bill.interface';

export const mockBill = [
  {
    id: '123',
    name: 'Birthday celebration',
    description: 'No description here',
    billAmount: 23,
    numberOfPayers: 0,
    subBillAmount: 23,
    ownerId: 'owner-id-123',
    payerIds: [],
  },
  {
    id: '456',
    name: 'Happy hour drinks',
    description: 'No description here',
    billAmount: 34,
    numberOfPayers: 1,
    subBillAmount: 17,
    ownerId: 'owner-id-123',
    payerIds: ['payer-id-678'],
  },
] as Bill[];

@Injectable()
export class BillsService {
  private readonly bills: Bill[] = mockBill;

  findAll() {
    return this.bills;
  }
}
