import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurentMserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
