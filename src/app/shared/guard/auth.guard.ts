import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
  ) {

  }

  canActivate() {
    if (this.tokenService.get()?.token) {
      return true;
    }
    this.router.navigate([this.tokenService.login_url]);
    return false;
    // if (localStorage.getItem('isLoggedin')) {
    //  return true;
    // }

    // localStorage.removeItem('access_token');//
    // this.router.navigate(['/login']);
    // return false;
  }
}
