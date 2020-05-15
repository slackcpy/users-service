import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { cwd } from 'process';

import {UsersModule} from './Users/users.module';
import { AppController } from './users.controller';

@Module({
  imports: [
    UsersModule,
    GraphQLModule.forRoot({
    autoSchemaFile: join(cwd(), 'src/schema.gql')
  })],
  controllers: [AppController]
  
})
export class AppModule {}
