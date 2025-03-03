import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Para permitir solicitudes desde el frontend
  await app.listen(3000);
  console.log('App running on http://localhost:3000');
}
bootstrap();
