import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Auth2Service } from './auth2/auth2.service';
import { AuthenticatedGuard } from './auth2/authenticated.guard';
import { JwtAuthGuard } from './auth2/jwt-auth.guards';
import { LocalAuthGuard } from './auth2/local-auth.guard';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly auth2Service: Auth2Service) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    // return req.user;
    // return { msg: 'Logged in!' }; //todo return JWT acess token
    return this.auth2Service.login(req.user);
  }

  // @UseGuards(AuthenticatedGuard)
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    //require bearer token, validate token
    return req.user;
  } // getHello(): string {
  //   return this.appService.getHello();
  // }
}
