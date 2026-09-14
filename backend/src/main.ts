// Boots the NestJS backend application and exposes its HTTP API.
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  // Register the root module here when backend modules are implemented.
  const app = await NestFactory.create({});
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
