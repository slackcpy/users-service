import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({nullable: true})
  firstName?: string;

  @Field({nullable: true})
  lastName?: string;
}