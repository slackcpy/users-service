import {Module} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.reslover';

@Module({
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}