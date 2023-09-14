import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DatabaseModule } from '../databases/database.module';
import { IpetController } from './ipet.controller';
import { IpetService } from './ipet.service';
import { ProductsRepository } from './repositories/product.repository';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [IpetController],
  providers: [IpetService, ProductsRepository],
})
export class ProductsModule {}
