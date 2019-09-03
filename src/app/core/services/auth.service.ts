import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenObj } from '../models/token';
import { BASE_URL } from '../config/service.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'api/token';
  private httpOptions = {};

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private authUrl: string
  ) {}

  loginWithCredentials(
    username: string,
    password: string,
  ): Observable<TokenObj> {
    const url = `${this.authUrl}${this.apiUrl}`;
    console.log(url);

    return this.http.post<TokenObj>(url, {
      username,
      password,
    });
  }
}
