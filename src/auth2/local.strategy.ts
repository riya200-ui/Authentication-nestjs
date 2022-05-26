/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Auth2Service } from '../auth2/auth2.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private auth2Service: Auth2Service) {
    super(); //config
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.auth2Service.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
