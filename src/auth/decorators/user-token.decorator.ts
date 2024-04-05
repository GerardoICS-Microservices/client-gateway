import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const { token } = ctx.switchToHttp().getRequest();

    if (!token) {
      throw new InternalServerErrorException(
        'Token not found in request (AuthGuard Called',
      );
    }

    return token;
  },
);
