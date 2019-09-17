import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageList } from '../models/pagelist';
import { RSJ_URL } from '../config/service.config';
import { ResponseResult } from '../models/reponseresult';
import { SettingsService } from '@delon/theme';

@Injectable()
export class EmpCertService {

    apiUrl = 'api/empcert';

    constructor(
        private http: HttpClient,
        public settings: SettingsService,
        @Inject(RSJ_URL) private baseUrl: string
    ) {

    }

    //根据身份证查询就业信息列表
    public getListById(
        id: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/id/${id}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<PageList<any>>(url);
        return result;
    }

    public getListBySi(
        si: string,
        sort: string,
        order: string,
        pageNumber: number,
        pageSize: number
    ) {
        const url = `${this.baseUrl}${this.apiUrl}/si/${si}?sort=${sort}&order=${order}&size=${pageSize}&page=${pageNumber}`;
        const result = this.http.get<any>(url);
        return result;
    }
}
