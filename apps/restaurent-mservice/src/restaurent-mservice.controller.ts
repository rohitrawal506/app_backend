import { Controller, Get } from '@nestjs/common';
import { RestaurentMserviceService } from './restaurent-mservice.service';

@Controller()
export class RestaurentMserviceController {
  constructor(private readonly restaurentMserviceService: RestaurentMserviceService) {}

  @Get()
  getHello(): string {
    return this.restaurentMserviceService.getHello();
  }
}
