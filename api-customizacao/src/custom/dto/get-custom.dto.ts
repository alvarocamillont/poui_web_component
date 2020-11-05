import { ApiPropertyOptional } from '@nestjs/swagger';

export class CustomDto {
  @ApiPropertyOptional()
  name: string;

  @ApiPropertyOptional()
  src: string;
}
