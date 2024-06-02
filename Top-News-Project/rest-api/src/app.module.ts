import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  MongooseModule.forRoot(process.env.CONNECTION || "mongodb://127.0.0.1:27017/Top-News"),
    NewsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
