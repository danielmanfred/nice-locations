import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
  const APP_DIRECTORY = resolve(__dirname, );
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
