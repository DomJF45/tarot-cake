import { Request, Response, NextFunction } from 'express';
import User from "../user/user.model";
import mongoose from "mongoose";

export const protect = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  
  if (req.session.user) {
  
    const { user } = req.session;
    console.log(user);
    const u = await User.findById(new mongoose.Types.ObjectId(user)).select('-password').exec();

    req.user = u!;

    console.log(req.user); 
    return next(); 



  }

    res.sendStatus(401);
}
