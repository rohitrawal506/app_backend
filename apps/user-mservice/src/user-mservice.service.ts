import { Injectable } from "@nestjs/common";

@Injectable()
export class UserMserviceService {
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
}