import { Module } from '@nestjs/common';
import { AuthOpenIdStrategy } from './auth-open-id.strategy';
import { CLIENT } from './auth.constants';
import { Issuer } from 'openid-client';

@Module({
  providers: [
    AuthOpenIdStrategy,
    {
      provide: CLIENT,
      useFactory: async () => {
        const googleIssuer = await Issuer.discover(
          'https://accounts.google.com',
        );
        return new googleIssuer.Client({
          client_id: 'zELcpfANLqY7Oqas',
          client_secret:
            'TQV5U29k1gHibH5bx1layBo0OSAvAbRT3UYW3EWrSYBB5swxjVfWUa1BS8lqzxG/0v9wruMcrGadany3',
          redirect_uris: ['http://localhost:3000/cb'],
          response_types: ['code'],
          // id_token_signed_response_alg (default "RS256")
          // token_endpoint_auth_method (default "client_secret_basic")
        });
      },
    },
  ],
})
export class AuthModule {}
