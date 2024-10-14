import { Injectable } from '@nestjs/common';
import {
  ClientProxyFactory,
  Transport,
  ClientProxy,
} from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        port: 3002,
      },
    });
  }

  public getHello(): Promise<string> {
    return lastValueFrom(this.client.send<string, string>('getHello', 'Michael'));
  }
}