import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './gqlTypes/user.gqlType';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.dto';

@Resolver(of => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {};

  @Query(() => User)
  async user(@Args('id', {type: () => String}) id: string) {
    return this.usersService.getUserById(id);
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.usersService.createUser(input); 
  }
  
}