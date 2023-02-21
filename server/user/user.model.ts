import mongoose, { Schema, model } from 'mongoose';
import bcrypt from "bcrypt"

export interface IUser {
  name: string,
  email: string,
  password: string
}

export interface UserDocument extends mongoose.Document {
  email: string,
  name: string,
  password: string,
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email']
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  }
}, { timestamps: true });


const User = model<UserDocument>('User', UserSchema);

export default User;