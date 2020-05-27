import { env } from 'process';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Transport } from '@nestjs/microservices'

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule   
  );

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: env.TCP_PORT || 4000,
      host: 'users-service'
    }
  });

  await app.startAllMicroservicesAsync();

  await app.listen(env.PORT || 3001);
}

bootstrap();