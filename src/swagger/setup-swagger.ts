import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
        .setTitle('E-Commerce API')
        .setDescription('E-Commerce API built with NestJS')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document, {
        swaggerOptions: {
            urls: [
                { url: '/api-json', name: 'OpenAPI JSON' },
            ],
        },
    })
    app.getHttpAdapter().get('/api-json', (req, res) => {
        res.json(document);
    });
}