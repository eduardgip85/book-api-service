import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API de Llibres i Autenticació')
    .setDescription(
      'API REST per gestionar un catàleg de llibres amb autenticació JWT.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Llibres', 'Gestió del catàleg de llibres')
    .addTag('Autenticació', "Gestió de registre i login d'usuaris")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  console.log(`Servidor NestJS funcionant al port ${PORT}`);
  console.log(`Documentació Swagger disponible a http://localhost:${PORT}/api-docs`);
}
bootstrap();