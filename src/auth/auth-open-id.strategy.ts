import { Inject, Injectable } from '@nestjs/common';
import { CLIENT } from './auth.constants';
import { Client, Strategy } from 'openid-client';
import * as passport from 'passport';

@Injectable()
export class AuthOpenIdStrategy {
  constructor(@Inject(CLIENT) private readonly client: Client) {
    passport.use(
      'OpenID',
      new Strategy({ client }, (tokenSet, userInfo, done) => {
        return done(null, userInfo);
      }),
    );
  }
}
