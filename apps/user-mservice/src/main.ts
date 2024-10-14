// import { NestFactory } from '@nestjs/core';
// import { UserMserviceModule } from './user-mservice.module';

// async function bootstrap() {
//   const app = await NestFactory.create(UserMserviceModule);
//   await app.listen(3002);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { UserMserviceModule } from './user-mservice.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserMserviceModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3002,
      },
    },  
  );
  await app.listen();
}
bootstrap();