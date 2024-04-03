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

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
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

  async findById(id: string): Promise<Product> {
    return this.productModel.findById(id)
  }

  async findByCategory(category: string): Promise<Product[]> {
    return this.productModel.find({ categories: category }).exec();
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.productModel.find({ categories: category }).exec();
  }
}
