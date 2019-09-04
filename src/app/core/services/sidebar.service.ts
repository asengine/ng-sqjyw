import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JYW_URL } from '../config/service.config';
import { Menu } from '@delon/theme';

@Injectable()
export class SidebarService {
  apiUrl = 'api/routemenu/alain-menus';
  // private httpOptions = {};

  constructor(
    private http: HttpClient,
    @Inject(JYW_URL) private baseUrl: string
  ) {
    // this.httpOptions = {
    //  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.tokenService.get().token })
    // };
  }

  public getList() {
    const url = `${this.baseUrl}${this.apiUrl}`;
    const result = this.http.get<Array<Menu>>(url);
    return result;
  }
}
