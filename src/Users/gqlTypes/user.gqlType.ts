import { ObjectType, Field, Directive, HideField } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field()
  id: string;

  @Field()
  email: string;

  @HideField()
  password: string;

  @Field({nullable: true})
  firstName?: string;

  @Field({nullable: true})
  lastName?: string;
}