import { Injectable } from '@nestjs/common';
import { Customs } from './custom.interface';
import { customs } from './db/custom.data';

@Injectable()
export class CustomService {
  customs: Customs = customs;

  getCustom(component: string) {
    return this.customs.find(custom => custom.component === component);
  }
}
