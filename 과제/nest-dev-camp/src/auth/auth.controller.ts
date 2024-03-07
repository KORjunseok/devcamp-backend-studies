import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') // register 주소의 POST 요청 처리
  async register(@Body() userDto : CreateUserDto) {
    return await this.authService.register(userDto);
  }
}
