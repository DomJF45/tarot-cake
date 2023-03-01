import mongoose, { Schema, model } from 'mongoose';
import bcrypt from "bcrypt"
import { iCardHistory } from "../common/session.module"; 
import { Card } from "../items/card.interface";
import { iHistory } from './user.interface';
import { iUser } from './user.interface';
import { unique } from 'jspsych/dist/modules/utils';

export interface UserDocument extends mongoose.Document {
  email:string, 
  name: string,
  password: string,
  history?: iHistory[],
 
  isValidPassword(password: string): Promise<Error | boolean>

}
export interface HistoryDocument extends mongoose.Document {
  date: string,
  time: string,
  cards: Card[]
}

const CardSchema = new Schema({
  card1: {
    id: Number,
    name: String,
    bio: String,
    image: String,
  }
})
const HistorySchema = new Schema({
  date: String,
  time: String,
  cards: [CardSchema] 
})

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  history: [HistorySchema]
}, { timestamps: true });

UserSchema.pre<UserDocument>('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
})

UserSchema.methods.isValidPassword = async function(password: string): Promise<Error | boolean> {
  return await bcrypt.compare(password, this.password)
}

export default model<UserDocument>('User', UserSchema);


