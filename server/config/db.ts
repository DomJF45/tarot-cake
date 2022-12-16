import { connect } from 'mongoose'
import * as dotenv from 'dotenv';
dotenv.config();

export const connectDb = async(): Promise<void> => {

  try {
    await connect(process.env.MONGO_URI!);
  } catch (err: any) {
    
  }
}