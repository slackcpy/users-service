import * as mongoose from 'mongoose';
import { IUser } from '../interfaces/user.interface';

export const UserSchema = new mongoose.Schema<IUser>({
  email: String,
  fistName: String,
  lastName: String
})