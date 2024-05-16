import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

const fakeTokens = ["ashjdasojdasoi","asdsdgdfdh", "olkrdgjdflkgn" ]

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;
    const token = request.headers.authorization;
    if(fakeTokens.includes(token)){
      return true;
    }
    throw new HttpException("Invalid token!", HttpStatus.BAD_REQUEST);
  }
}
