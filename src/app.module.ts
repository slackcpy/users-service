import { join } from 'path';
import { cwd, env } from 'process';
import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './Users/users.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(cwd(), 'src/schema.gql')  
  }),
  MongooseModule.forRoot(env.DB_LINK)
]
  
})
export class AppModule {}
