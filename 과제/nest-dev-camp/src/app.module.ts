import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from 'src/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import {
  User,
  Coupon,
  IssuedCoupon,
  Order,
  OrderItem,
  Point,
  PointLog,
  Product,
  ShippingInfo,
} from './common';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // sqlite 설정 메서드
      database: 'nest-dev-camp',
      entities: [
        User,
        Coupon,
        IssuedCoupon,
        Order,
        OrderItem,
        Point,
        PointLog,
        Product,
        ShippingInfo,
      ],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
