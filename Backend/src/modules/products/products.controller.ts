import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
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

  @Get('/:id')
  getById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    return this.service.deleteById(id);
  }

  @Put('/:id')
  updateById(
    @Body() product: Partial<CreateProductDTO>,
    @Param('id') id: string,
  ) {
    return this.service.updateById(id, product);
  }
}
