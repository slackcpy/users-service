import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import {UsersModule} from './Users/users.module';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql'
  })]
})
export class AppModule {}
