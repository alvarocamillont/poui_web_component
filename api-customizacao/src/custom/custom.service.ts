import { Injectable } from '@nestjs/common';
import { Customs } from './custom.interface';
import { customs } from './db/custom.data';

@Injectable()
export class CustomService {
  customs: Customs = customs;

  getCustom(name: string) {
    return this.customs.find(custom => custom.name === name);
  }
}
