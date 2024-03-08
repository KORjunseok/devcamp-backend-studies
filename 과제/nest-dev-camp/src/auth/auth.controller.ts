import { Body, Controller, Post, Request, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') // register 주소의 POST 요청 처리
  async register(@Body() userDto: CreateUserDto) {
    return await this.authService.register(userDto);
  }

  @Post('login')
  async login(@Request() req, @Response() res) {
    // validateUser 호출 유저 정보 획인
    const userInfo = await this.authService.validateUser(
      req.body.email,
      req.body.password,
    );

    // 유저 정보 있을 시 쿠키 정보를 Response에 저장
    if (userInfo) {
      res.cookie('login', JSON.stringify(userInfo), {
        httpOnly: false, // 브라우저에서 읽을 수 있게 함
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
      return res.send({ message: 'login success' });
    } else {
      return res.status(400).send({ message: 'login fail' });
    }
  }
}
