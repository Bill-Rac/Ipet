import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schemas/product.schema';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(product: Omit<Product, '_id'>): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
