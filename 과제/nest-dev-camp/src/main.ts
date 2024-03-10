import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser()); // 쿠키 파서 설정
  app.use(
    session({
      secret: 'very-important-secret', // 세션 암호화에 사용되는 키
      resave: false, // 세션을 항상 저장할지 여부 
      // 세션이 더장되기 전에 초기화되지 않은 상태로 세션을 미리 만들어 저장
      saveUninitialzed : false,
      cookie : { maxAge: 3600000 }, // 쿠키 유효시간 1시간
    }),
  );
  
  // passprot 초기화 및 세션 저장소 초기화
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
