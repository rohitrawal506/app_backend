import { Module } from '@nestjs/common';
import { RestaurentMserviceController } from './restaurent-mservice.controller';
import { RestaurentMserviceService } from './restaurent-mservice.service';

@Module({
  imports: [],
  controllers: [RestaurentMserviceController],
  providers: [RestaurentMserviceService],
})
export class RestaurentMserviceModule {}
