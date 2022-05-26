/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { deserializeUser } from 'passport';

@Injectable()
export class SessionSerializer extends PassportSerializer {

  serializeUser(
    user: any,
    done: (err: Error, user: any) => void
    ): any {
    done(null, user);
    // done(null, {id:user.id});

    }

  deserializeUser(
    payload: any,
    done: (err: Error, payload: string) => void,
  ): any {
    //   const user = this.usersService.findById(payload.id)
    done(null, payload);
  }
}
