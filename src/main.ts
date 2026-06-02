import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors() enables the lang-app-api to accept requests from other origins. In production, this should be locked down to frontend urls (i.e. from lang-app-web), but for local development it should be fine for now
  app.enableCors();
  // whitelist: true strips junk data (data I didn't specifically allow) sent by client
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
