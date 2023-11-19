import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import databaseConfig from './database.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigType<typeof databaseConfig>) => {
        return {
          uri: `mongodb+srv://${configService.host}:${configService.password}@petcluster.pq0zffq.mongodb.net/`,
          dbName: 'iPet',
        };
      },
      inject: [databaseConfig.KEY],
    }),
  ],
})
export class DatabaseModule {}
