import {Module} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.reslover';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}