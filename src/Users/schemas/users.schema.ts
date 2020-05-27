import * as mongoose from 'mongoose';
import { IUser } from '../interfaces/user.interface';

export const UserSchema = new mongoose.Schema<IUser>({
  email: String,
  password: String,
  firstName: String,
  lastName: String
})