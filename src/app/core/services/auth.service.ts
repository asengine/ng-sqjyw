import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenObj } from '../models/token';
import { AUTH_URL, BASE_URL } from '../config/service.config';
import { JsonResult } from '@core/models/json-result';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/api/token';

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string,
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

  /**
   * 获取token
   * @returns access_token
   */
  public getToken() {
    const url = `${this.baseUrl}/api/v2/gettoken`;
    const result = this.http.post<JsonResult<TokenObj>>(url,
      {
        'authName': 'authName',
        'authPassword': 'authPassword'
      });
    return result;
  }
}
