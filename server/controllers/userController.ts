import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler'
import User, { UserDocument } from '../user/user.model';
import { Query } from 'mongoose';


export const register = async (req: Request, res: Response): Promise<void | Response> => {

  const { name, email, password }: UserDocument = req.body;

  if (!name || !email || !password) {
    res.status(400);
  }

  const userExists: UserDocument | null = await User.findOne<UserDocument>({email});

  if (userExists === null) {
    res.status(400);
  }

  

}