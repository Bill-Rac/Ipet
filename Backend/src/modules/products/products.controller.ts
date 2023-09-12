import { Controller, Post, Body } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';

@Controller('products')
export class ProductsController {
  @Post()
  create(@Body() createProductDTO: CreateProductDTO) {
    console.log(createProductDTO);
    return 'ok';
  }
}
