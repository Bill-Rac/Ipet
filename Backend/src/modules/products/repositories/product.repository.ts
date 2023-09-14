import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schemas/product.schema';

@Injectable()
export class ProductsRepository {
  private readonly logger = new Logger(ProductsRepository.name);

  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(product: Omit<Product, '_id'>): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return createdProduct.save();
  }

  async findAllAvailable(): Promise<Product[]> {
    return this.productModel
      .find({
        availability: true,
      })
      .exec();
  }

  async deleteById(id: string): Promise<void> {
    await this.productModel.deleteOne({
      _id: id,
    });
  }

  async updateById(id: string, product: Partial<Product>): Promise<Product> {
    try {
      return this.productModel.findByIdAndUpdate({ _id: id }, product);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
