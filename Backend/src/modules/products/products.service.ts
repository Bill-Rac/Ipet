import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';
import { ProductsRepository } from './repositories/product.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly repository: ProductsRepository) {}

  async create(product: CreateProductDTO) {
    return this.repository.create({
      availability: product.availability,
      categories: product.categories,
      description: product.description,
      image: product.imageURL,
      name: product.name,
      price: product.price,
    });
  }

  async findAll() {
    return this.repository.findAll();
  }
}
