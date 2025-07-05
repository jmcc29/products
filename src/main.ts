import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './products/config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically remove properties that do not have decorators
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
    }),
  );
  await app.listen(envs.port);
  console.log(`Server running on: :${envs.port}`);
}
bootstrap();
