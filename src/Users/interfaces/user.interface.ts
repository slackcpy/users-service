import { Document } from "mongoose";

export interface IUser extends Document{
  id: string;
  email: string;
  password: string;
  fistName: string;
  lastName: string;
}