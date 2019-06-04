import * as mongoose from 'mongoose';

export const BillSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  billAmount: Number,
  numberOfPayers: Number,
  subBillAmount: Number,
  ownerId: String,
  payerIds: [String],
});
