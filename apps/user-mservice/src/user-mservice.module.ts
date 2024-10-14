import { Module } from '@nestjs/common';
import { UserMserviceController } from './user-mservice.controller';
import { UserMserviceService } from './user-mservice.service';

@Module({
  imports: [],
  controllers: [UserMserviceController],
  providers: [UserMserviceService],
})
export class UserMserviceModule {}
