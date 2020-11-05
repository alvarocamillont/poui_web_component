import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Custom } from './custom.interface';
import { CustomService } from './custom.service';
import { CustomDto } from './dto/get-custom.dto';

@ApiTags('Custom')
@Controller('custom')
export class CustomController {
  constructor(private customService: CustomService) {}

  @ApiResponse({ status: 200, type: CustomDto })
  @ApiParam({ name: 'name' })
  @Get(':name')
  getCustom(@Param() params: { name: string }): Custom {
    return this.customService.getCustom(params.name);
  }
}
