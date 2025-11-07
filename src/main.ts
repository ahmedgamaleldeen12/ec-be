import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupSwagger } from './swagger/setup-swagger';
import { openSwagger } from './swagger/open-swagger';
import { ensureDatabase } from './database/ensure-database';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  await ensureDatabase();

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  setupSwagger(app);

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  await app.listen(port);

  if (process.env.NODE_ENV !== 'production') {
    await openSwagger(port);
  }
}
bootstrap();