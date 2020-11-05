import { Module } from '@nestjs/common';
import { CustomService } from './custom.service';
import { CustomController } from './custom.controller';

@Module({
  providers: [CustomService],
  controllers: [CustomController]
})
export class CustomModule {}
