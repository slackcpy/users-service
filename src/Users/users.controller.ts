import { Controller } from "@nestjs/common";
import { UsersService } from "./users.service";
import { MessagePattern } from "@nestjs/microservices";
import { User } from "./gqlTypes/user.gqlType";

@Controller()
export class UsersController {

  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({cmd: 'get_user_by_email'})
  async getUserByEmail(data: { email: string }): Promise<User> {
    return await this.usersService.getUserByEmail(data.email)
  }

  @MessagePattern({cmd: 'get_user_by_id'})
  async getUserById(data: { id: string }) {
    return await this.usersService.getUserById(data.id);
  }
}