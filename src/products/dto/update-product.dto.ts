import { ApiPropertyOptional } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({ example: 'Samsung Galaxy S24 Ultra' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ example: 849.99 })
  @IsOptional()
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({ example: 'Updated description for the product' })
  @IsOptional()
  @IsString()
  description?: string;
}
