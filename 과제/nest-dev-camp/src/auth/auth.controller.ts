import { Body, Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
import { AuthenticatedGuard, GoogleAuthGuard, LoginGuard, LocalAuthGuard } from './auth.guard';

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

  @UseGuards(LoginGuard) // 로그인가드 사용
  @Post('login2')
  async login2(@Request() req, @Response() res) {
    // 쿠키 정보는 없지만 request에 user 정보 존재 시 응답 값에 쿠키 정보 추가
    if (!req.cookies['login'] && req.user) {
      // 응답에 쿠키 정보 추가
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        maxAge: 1000 * 10, // 테스트를 고려해 10초로 설정
      })
    }
    return res.send({ message: 'login2 success'});
  }
  // 로그인을 했을 때 실행되는 메서드
  @UseGuards(LoginGuard)
  @Get('test-guard')
  testGuard() {
    return '로그인한 상태에서만 보이는 메시지'
  }

  @UseGuards(LocalAuthGuard)
  @Post('login3')
  login3(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('test-guard2')
  testGuardWithSession(@Request() req) {
    return req.user;
  }

  @Get('to-google') // 구글 로그인으로 이동하는 라우터 메서드
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Request() req) {}

  @Get('google') // 구글 로그인 후 콜백 실행 후 이동 시 실행되는 라우터 메서드
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Request() req, @Response() res) {
    const { user } = req;
    return res.send(user)
  }
}
