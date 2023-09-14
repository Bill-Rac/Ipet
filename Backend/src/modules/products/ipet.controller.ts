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
import { IpetService } from './ipet.service';

@Controller('products')
export class IpetController {
  constructor(private readonly service: IpetService) {}
  @Post()
  create(@Body() createProductDTO: CreateProductDTO) {
    return this.service.create(createProductDTO);
  }

  @Get()
  findAll() {
    return this.service.findAllAvailableProducts();
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
