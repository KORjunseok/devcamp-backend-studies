
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

import * as argon2 from 'argon2';
import { CreateUserDto } from 'src/user/user.dto';


@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(userDto: CreateUserDto) {
    // 가입된 유저 체크
    const user = await this.userService.getUser(userDto.email);
    if (user) {
      throw new HttpException(
        '해당 이메일은 이미 존재합니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
    // 패스워드 암호화
    const hashedPassword = await argon2.hash(userDto.password);

    // 데이터베이스에 저장 중 에러 발생 시 서버 에러 발생
    try {
      const user = await this.userService.createUser({
        ...userDto,
        password: hashedPassword
      });
      // 회원 가입 후 반환하는 값에 password를 반영하지 않음
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException('서버 에러', 500);
    }
  }
}
