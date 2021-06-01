import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenObj } from '../models/token';
import { AUTH_URL } from '../config/service.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/api/token';

  constructor(
    private http: HttpClient,
    @Inject(AUTH_URL) private authUrl: string
  ) { }

  loginWithCredentials(mac: string[]): Observable<TokenObj> {
    const url = `${this.authUrl}${this.apiUrl}`;
    console.log(url);
    return this.http.post<TokenObj>(url, { 'mac': mac });
  }

  // 验证是否登录
  authCheck() {
    const url = `${this.authUrl}/api/authcheck`;
    const result = this.http.get<any>(url);
    return result;
  }
}
