import { iUser, iHistory } from '../user/user.interface';
import { UserDocument } from '../user/user.model';
import { Document } from 'mongoose';

interface reqUser {
  name: string,
  email: string,
  history: iHistory[]
}

declare global {
  namespace Express {
    interface Request {
      user: UserDocument
    }
  }
}
