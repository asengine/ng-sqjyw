import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../models/userprofile';
import { PageList } from '../models/pagelist';
import { JYW_URL } from '../config/service.config';
import { ResponseResult } from '../models/reponseresult';

@Injectable()
export class UserService {
  apiUrl = 'api/sysuser';

  constructor(
    private http: HttpClient,
    @Inject(JYW_URL) private baseUrl: string
  ) { }

  public getUserList(
    sort: string,
    order: string,
    pageNumber: number,
    pageSize: number,
    key: string,
  ) {
    const url = `${this.baseUrl}${this.apiUrl}/list?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}&key=${key}`;
    const result = this.http.get<PageList<UserProfile>>(url);
    return result;
  }

  public getSingle(id: number) {
    const url = `${this.baseUrl}${this.apiUrl}/${id}`;
    const result = this.http.get<UserProfile>(url);
    return result;
  }

  public update(model: UserProfile) {
    const url = `${this.baseUrl}${this.apiUrl}`;
    const result = this.http.put<ResponseResult>(url, model);
    return result;
  }

  public add(model: UserProfile) {
    const url = `${this.baseUrl}${this.apiUrl}`;
    const result = this.http.post<ResponseResult>(url, model);
    return result;
  }

  public delete(ids: number[]) {
    const url = `${this.baseUrl}${this.apiUrl}/delete`;
    const items = [];
    ids.forEach(function (value, key) {
      items.push({ Id: value });
    });
    const result = this.http.post<ResponseResult>(url, {
      Items: items,
      ItemName: '删除账号',
    });
    return result;
  }
}
