import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: string;

  @Field(() => String)
  email: string;

  @Field({nullable: true})
  fistName: string;

  @Field({nullable: true})
  lastName: string;
}