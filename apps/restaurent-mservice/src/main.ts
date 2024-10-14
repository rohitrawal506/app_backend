// import { NestFactory } from '@nestjs/core';
// import { RestaurentMserviceModule } from './restaurent-mservice.module';

// async function bootstrap() {
//   const app = await NestFactory.create(RestaurentMserviceModule);
//   await app.listen(3001);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { RestaurentMserviceModule } from './restaurent-mservice.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

console.log("microservicee")
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RestaurentMserviceModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3001,
      },
    },
  );
  await app.listen();
}
bootstrap();
