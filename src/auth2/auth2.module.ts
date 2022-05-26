import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { Auth2Service } from './auth2.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'SECRET',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [Auth2Service, LocalStrategy, JwtStrategy],
  exports: [Auth2Service],
})

// @Module({
//   imports: [UsersModule, PassportModule.register({ session: true })],
//   providers: [Auth2Service, LocalStrategy, SessionSerializer],
// })
export class Auth2Module {}
