import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler'
import User, { UserDocument } from '../user/user.model';
import { Query } from 'mongoose';
import bcrypt from "bcrypt";
import { iUser } from '../user/user.interface';
import mongoose from 'mongoose';

export const register = async (req: Request, res: Response): Promise<void | Response> => {

  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
    }

    const userExists = await User.findOne({email});

    if (userExists) {
      res.status(400);
    }
    
    const user = await User.create({
      name,
      email,
      password, 
    })

    if (user) {
      req.session.user = user._id.toString();         
    }
    
    res.json({
      name: user.name,
      email: user.email,
      history: user.history
    });

  } catch(err: any) {
    console.log(err); // fix me later
  }

    

}

export const login = async (req: Request, res: Response) => {

  try {

    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.sendStatus(400);
      throw new Error('User not found');
    }
    if (await user.isValidPassword(password)) {
      req.session.user = user._id.toString();
      res.json({
        name: user.name,
        email: user.email,
        history: user.history
      });
    } else {
      throw new Error("Invalid Credentials");
    }

  } catch(err: any) {
    console.log(err); //fix me later
  }

}


export const getUserHistory = async (req: Request, res: Response) => {
  
  try {
 
    res.json(req.user.history);
    
  } catch (err: any) {
    console.log(err); // fix me later
    res.sendStatus(400);
  }

}

export const setUserHistory = async (req: Request, res: Response) => {

  try {

    const { date, time, cards } = req.body;

    const cardHistory = { date, time, cards };

    req.user.history!.push(cardHistory);
    req.user.save();
   
    res.send(201);

  } catch (err: any) {
    console.log(err);
  }

}

export const getUser = async (req: Request, res: Response) => {

  try {
   
    const { user } = req.session;
    const u = await User.findById(new mongoose.Types.ObjectId(user));
    if (!user) {
      res.sendStatus(404); // cookie not found
    } else if (!u) {
      res.sendStatus(404); // not found in db   
    } else {
      res.json({
        email: u.email,
        name: u.name,
        history: u.history
      })
    }

  } catch(err: any) {
    console.log(err);
  }

}


