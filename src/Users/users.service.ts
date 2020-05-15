import {Injectable} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {};

  async getUserById(id: string): Promise<IUser> {
    return this.userModel.findById(id).exec()
  }

  async createUser(userData: CreateUserInput): Promise<IUser> {
    const createdUser = new this.userModel(userData);
    
    return createdUser.save();
  }
}