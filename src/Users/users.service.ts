import {Injectable} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.dto';

@Injectable()
export class UsersService {

  getUserById(id: string) {
    return {id, email: 'test@test.com', firstName: 'Name' }
  }

  createUser(userData: CreateUserInput) {
    return userData;
  }
}