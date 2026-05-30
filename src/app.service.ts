import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Bro!';
  }
}

// export class Repository<Card> {
//   getCards(): Promise<Card> {
//     return 'Hello Bro!';
//   }
// }
