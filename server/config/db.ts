import { connect } from 'mongoose'
import * as dotenv from 'dotenv';
dotenv.config();

export const connectDb = async(): Promise<void> => {

  try {
    const conn = await connect(process.env.MONGO_URI!);
    console.log(`Connected to ${conn.connection.host}`);
  } catch (err: any) {
    console.log(err);
    process.exit(1);
  }
}