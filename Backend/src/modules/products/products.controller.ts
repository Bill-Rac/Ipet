import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}
  @Post()
  create(@Body() createProductDTO: CreateProductDTO) {
    return this.service.create(createProductDTO);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
