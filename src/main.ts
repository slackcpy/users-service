import { NestFactory } from '@nestjs/core';
import dotenv from 'dotenv';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule
   
  );
  app.listen(3000);
}

dotenv.config();
bootstrap();