import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../config/service.config';

@Injectable()
export class OperationService {
  apiUrl = 'api/operation';

  constructor(
    private http: HttpClient,
    @Inject(BASE_URL) private baseUrl: string
  ) {}

  public getList(controller: string) {
    const url = `${this.baseUrl}${this.apiUrl}?controller=${controller}`;
    const result = this.http.get<string[]>(url);
    return result;
  }
}
