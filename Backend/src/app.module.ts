import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './modules/databases/database.config';
import { ProductsModule } from './modules/products/ipet.module';

@Module({
  imports: [
    ProductsModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
