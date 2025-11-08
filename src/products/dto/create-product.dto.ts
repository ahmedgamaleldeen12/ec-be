import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'iPhone 15 Pro',
    description: 'The name of the product',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 999.99,
    description: 'The price of the product in USD',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'The latest Apple flagship phone with A17 chip',
    description: 'Optional product description',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}
