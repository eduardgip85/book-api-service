"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API de Llibres i Autenticació')
        .setDescription('API REST per gestionar un catàleg de llibres amb autenticació JWT.')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('Llibres', 'Gestió del catàleg de llibres')
        .addTag('Autenticació', "Gestió de registre i login d'usuaris")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT);
    console.log(`Servidor NestJS funcionant al port ${PORT}`);
    console.log(`Documentació Swagger disponible a http://localhost:${PORT}/api-docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map