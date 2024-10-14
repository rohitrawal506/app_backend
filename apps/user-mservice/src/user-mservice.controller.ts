import { Controller } from '@nestjs/common';
import { UserMserviceService } from './user-mservice.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserMserviceController {
  constructor(private readonly userMserviceService: UserMserviceService) {}

  @MessagePattern('getHello')
  getHello(name: string): string {
    return this.userMserviceService.getHello(name);
  }
}
