import { Document } from 'mongoose';

export interface Bill extends Document {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly billAmount: number;
  readonly numberOfPayers: number;
  readonly subBillAmount: number;
  readonly ownerId: string;
  readonly payerIds: string[];
}
